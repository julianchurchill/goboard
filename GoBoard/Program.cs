using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace GoBoard
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IISHost();
            // SelfHost(args);
        }

        private static void IISHost()
        {
            var host = new WebHostBuilder()
              .UseKestrel()
              .UseContentRoot(Directory.GetCurrentDirectory())
              .UseIISIntegration()
              .ConfigureLogging(logging =>
              {
                  logging.AddAWSProvider();

                  // When you need logging below set the minimum level. Otherwise the logging framework will default to Informational for external providers.
                  logging.SetMinimumLevel(LogLevel.Debug);
              })
              .UseStartup<Startup>()
              .Build();
            host.Run();
        }

        private static void SelfHost(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
