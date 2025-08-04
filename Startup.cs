using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

[assembly: OwinStartup(typeof(ReverseProxy.Startup))]
namespace ReverseProxy
{
	public class Startup
	{
		private static readonly string TargetServerUrl = ConfigurationManager.AppSettings["ChatbotServerUrl"];
		private static readonly string Username = ConfigurationManager.AppSettings["ChatbotUsername"];
		private static readonly string Password = ConfigurationManager.AppSettings["ChatbotPassword"];

		private static AuthenticationHeaderValue GetBasicAuthHeader()
		{
			string credentials = Convert.ToBase64String(Encoding.ASCII.GetBytes($"{Username}:{Password}"));
			return new AuthenticationHeaderValue("Basic", credentials);
		}

		public void Configuration(IAppBuilder app)
		{
			app.UseCors(CorsOptions.AllowAll);
			app.Use(async (context, next) =>
			{
				var request = context.Request;
				var response = context.Response;

				// Handle CORS preflight
				if (request.Method == "OPTIONS")
				{
					SetCrosHeaders(response);
					response.StatusCode = 200;
					return;
				}

				var forwardPath = request.Path.ToString();

				//Ensure the forwarded path starts with "/" (if it's empty, set to "/")
				if (string.IsNullOrEmpty(forwardPath)) forwardPath = "/";

				// Reconbstruct the target URL with query string if present.
				string targetUrl = $"{TargetServerUrl}{forwardPath}{(request.QueryString.HasValue ? "?" + request.QueryString.Value : "")}";

				var handler = new HttpClientHandler
				{
					ServerCertificateCustomValidationCallback = (message, cert, chain, errors) => true
				};
				using(var httpClient = new HttpClient(handler))
				{
					HttpRequestMessage forwardRequest = new HttpRequestMessage(new HttpMethod(request.Method), targetUrl);

					if (new HttpMethod(request.Method) == HttpMethod.Post || new HttpMethod(request.Method) == HttpMethod.Put)
					{
						var streamContent = new StreamContent(request.Body);
						forwardRequest.Content = streamContent;
					}

					// Copy headers (preserve client Authorization)
					CopyRequestHeaders(request, forwardRequest);

					// Add basic auth
					forwardRequest.Headers.Authorization = GetBasicAuthHeader();

					// Send request
					HttpResponseMessage backResponse = await httpClient.SendAsync(forwardRequest);
					string responseBody = await backResponse.Content.ReadAsStringAsync();
					response.StatusCode = (int)backResponse.StatusCode;

					// copy headers
					foreach (var header in backResponse.Headers)
					{
						response.Headers.Set(header.Key, string.Join(", ", header.Value));
					}

					foreach (var header in backResponse.Content.Headers)
					{
						response.Headers.Set(header.Key, string.Join(", ", header.Value));
					}

					// remove "transfer-encoding"
					response.Headers.Remove("transfer-encoding");

					response.ContentType = backResponse.Content.Headers.ContentType?.ToString();
					SetCrosHeaders(response);

					await backResponse.Content.CopyToAsync(response.Body);

					//SharePointLogger.LogRequestResponse(
					//	targetUrl,
					//	request.Method, 
					//	requestBody, 
					//	responseBody, 
					//	(int)serverResponse.StatusCode
					//	);
				}
			});
		}

		private static void CopyRequestHeaders(IOwinRequest originalRequest, HttpRequestMessage forwardRequest)
		{
			var excludeHeaders = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
			{
					"Host",
					"Origin"
			};

			foreach (var header in originalRequest.Headers)
			{
				var key = header.Key;
				var value = header.Value;

				// Special case: rename Authorization
				if (string.Equals(key, "Authorization", StringComparison.OrdinalIgnoreCase))
				{
					forwardRequest.Headers.TryAddWithoutValidation("Client-Authorization", value);
					continue;
				}

				if (excludeHeaders.Contains(key)) continue;

				bool added = forwardRequest.Headers.TryAddWithoutValidation(key, value);
				if (!added && forwardRequest.Content != null)
				{
					forwardRequest.Content.Headers.TryAddWithoutValidation(key, value);
				}
			}

			if (!forwardRequest.Headers.Contains("X-Forward-For"))
			{
				forwardRequest.Headers.Add("X-Forward-For", originalRequest.RemoteIpAddress);
			}
		}

		private static void SetCrosHeaders(IOwinResponse response)
		{
			response.Headers.Set("Access-Control-Allow-Origin", "*");
			response.Headers.Set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, difyChatbotConfig, Client-Authorization");
			response.Headers.Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
		}
	}
}
