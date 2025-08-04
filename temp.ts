const TextDecoderClass = (window as any)['TextDecoder'];
const decoder = new TextDecoderClass();
const reader = res.body!.getReader();

let fullAnswer = '';
let renderTimeout: number | null = null;

const updateMessage = () => {
  messageDiv.innerHTML = marked(fullAnswer + '<span class="blinking-cursor">▌</span>');
  messages!.scrollTop = messages!.scrollHeight;
};

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  const chunk = decoder.decode(value, { stream: true });

  const lines = chunk.split('\n').filter(line => line.trim() !== '');
  for (const line of lines) {
    try {
      const json = JSON.parse(line);
      const piece = json.answer || '';

      fullAnswer += piece;

      if (renderTimeout) clearTimeout(renderTimeout);
      renderTimeout = window.setTimeout(updateMessage, 30); // Throttle updates
    } catch (e) {
      console.warn('Invalid stream chunk:', line);
    }
  }
}

// Final render without cursor
messageDiv.innerHTML = marked(fullAnswer);
messages!.scrollTop = messages!.scrollHeight;