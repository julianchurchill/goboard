using System.Reflection;
using Microsoft.AspNetCore.Mvc;

namespace GoBoard.Controllers
{
    public class VersionInfo
    {
        public string Name { get; set; }
    }

    [ApiController]
    [Route("api/v1/[controller]")]
    public class VersionController : ControllerBase
    {
        [HttpGet]
        public VersionInfo Get()
        {
            return new VersionInfo
            {
                Name = Assembly.GetEntryAssembly().GetCustomAttribute<AssemblyInformationalVersionAttribute>().InformationalVersion    
            };
        }
    }
}
