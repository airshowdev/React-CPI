using CpiApi.Models;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Https;
using MongoDB.Driver;
using System.Net;
using System.Security.Cryptography.X509Certificates;

namespace CpiApi
{
    public class Program
    {
        public static MongoClient Client;
        public static IMongoDatabase DB;
        public static IMongoCollection<Project> Projects;

        public static void Main(string[] args)
        {
#if DEBUG
            Client = new MongoClient("mongodb://10.10.3.27:27017");
#else
            Client = new MongoClient("mongodb://mongo:27017");
#endif

            DB = Client.GetDatabase("CPI_Database");
            Projects = DB.GetCollection<Project>("Projects");

            CreateWebHostBuilder(args).
                UseKestrel(options =>
                {
                    options.Listen(new IPEndPoint(IPAddress.Loopback, 8081), listenOptions =>
                    {
                        //var httpsConnectionAdapterOptions = new HttpsConnectionAdapterOptions()
                        //{
                        //    ClientCertificateMode = ClientCertificateMode.RequireCertificate,
                        //    SslProtocols = System.Security.Authentication.SslProtocols.Tls,
                        //    ServerCertificate = GetServiceCertificate("52195E38942C516306FE8AE8186D02211CD69F36")
                        //};
                        listenOptions.UseHttps(@"C:\Users\USAF_Admin\Documents\CpiApi\CpiApi\bin\Debug\netcoreapp2.1\clientcertificatemiddlewaredemo.pfx", "password", x => x.ClientCertificateMode = ClientCertificateMode.RequireCertificate);
                    });
                }).
                Build().
                Run();
        }

        private static X509Certificate2 GetServiceCertificate(string subjectName)
        {
            using (var certStore = new X509Store(StoreName.CertificateAuthority, StoreLocation.LocalMachine))
            {
                certStore.Open(OpenFlags.ReadOnly);
                var certCollection = certStore.Certificates.Find(
                                           X509FindType.FindByThumbprint, subjectName, false);
                // Get the first certificate
                X509Certificate2 certificate = null;
                if (certCollection.Count > 0)
                {
                    certificate = certCollection[0];
                }
                return new X509Certificate2(certificate.GetRawCertData(), "password");
            }
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}