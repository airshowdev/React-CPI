using System;
using System.Reflection;
using log4net;
using log4net.Repository;
using System.Xml;

namespace CPI.Client
{

    public class Log4NetLogger
    {

        private static ILog log = null;
        public static void Create()
        {
            XmlDocument doc = new XmlDocument();
            doc.Load("log4net.config");
            ILoggerRepository repo = LogManager.CreateRepository(Assembly.GetEntryAssembly(), typeof(log4net.Repository.Hierarchy.Hierarchy));

            GlobalContext.Properties["LogFileName"] = "CPI";
            log4net.Config.XmlConfigurator.Configure(repo, doc["log4net"]);

            log = LogManager.GetLogger(repo.Name, "log");
        }

        public static void Debug(string toWrite)
        {
            log.Debug(toWrite + '\n');
        }
        public static void Warn(string toWrite)
        {
            log.Warn(toWrite + '\n');
        }
        public static void Error(string toWrite)
        {
            log.Error(toWrite + '\n');
        }
        public static void Info(string toWrite)
        {
            log.Info(toWrite + '\n');
        }
        public static void Fatal(string toWrite)
        {
            log.Fatal(toWrite + '\n');
        }
        public static void Debug(Exception Ex)
        {
            log.Debug(Ex.ToString() + '\n');
        }
        public static void Warn(Exception Ex)
        {
            log.Warn(Ex.ToString() + '\n');
        }
        public static void Error(Exception Ex)
        {
            log.Error(Ex.ToString() + '\n');
        }
        public static void Info(Exception Ex)
        {
            log.Info(Ex.ToString() + '\n');
        }
        public static void Fatal(Exception Ex)
        {
            log.Fatal(Ex.ToString() + '\n');
        }
    }

}
