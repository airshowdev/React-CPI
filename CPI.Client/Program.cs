using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace CPI.Client
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Log4NetLogger.Create();
            CreateWebHostBuilder(args).Build().Run();
            
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
