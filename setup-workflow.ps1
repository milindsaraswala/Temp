
# PowerShell Script to Set Up WorkflowEngine Project

mkdir WorkflowEngine
cd WorkflowEngine

dotnet new sln -n WorkflowEngine
dotnet new classlib -n WorkflowEngine.Core
dotnet new classlib -n WorkflowEngine.Data
dotnet new webapi -n WorkflowEngine.Web
dotnet new xunit -n WorkflowEngine.Tests

dotnet sln add .\WorkflowEngine.Core\WorkflowEngine.Core.csproj
dotnet sln add .\WorkflowEngine.Data\WorkflowEngine.Data.csproj
dotnet sln add .\WorkflowEngine.Web\WorkflowEngine.Web.csproj
dotnet sln add .\WorkflowEngine.Tests\WorkflowEngine.Tests.csproj

dotnet add .\WorkflowEngine.Data\WorkflowEngine.Data.csproj reference .\WorkflowEngine.Core\WorkflowEngine.Core.csproj
dotnet add .\WorkflowEngine.Web\WorkflowEngine.Web.csproj reference .\WorkflowEngine.Core\WorkflowEngine.Core.csproj
dotnet add .\WorkflowEngine.Web\WorkflowEngine.Web.csproj reference .\WorkflowEngine.Data\WorkflowEngine.Data.csproj
dotnet add .\WorkflowEngine.Tests\WorkflowEngine.Tests.csproj reference .\WorkflowEngine.Core\WorkflowEngine.Core.csproj

dotnet add .\WorkflowEngine.Data\WorkflowEngine.Data.csproj package Microsoft.EntityFrameworkCore
dotnet add .\WorkflowEngine.Data\WorkflowEngine.Data.csproj package Microsoft.EntityFrameworkCore.SqlServer
dotnet add .\WorkflowEngine.Data\WorkflowEngine.Data.csproj package Microsoft.EntityFrameworkCore.Design

$folders = @(
    "WorkflowEngine.Core\Models",
    "WorkflowEngine.Core\Interfaces",
    "WorkflowEngine.Core\Services",
    "WorkflowEngine.Data\Repositories",
    "WorkflowEngine.Data\DbContexts"
)
$folders | ForEach-Object { New-Item -Path $_ -ItemType Directory -Force }

Write-Output "Project structure created. Add your code to the generated folders."
