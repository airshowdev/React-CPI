using System;
using System.Reflection;
using log4net;
using log4net.Repository;
using System.Xml;
using System.IO;

public class Log4NetLogger
{

    static ILog log = null;
    public static void Create()
    {
        XmlDocument doc = new XmlDocument();
        doc.Load("log4net.config");
        ILoggerRepository repo = LogManager.CreateRepository(Assembly.GetEntryAssembly(), typeof(log4net.Repository.Hierarchy.Hierarchy));
        log4net.Config.XmlConfigurator.Configure(repo, doc["log4net"]);

        log = LogManager.GetLogger(repo.Name, "log");

        log4net.GlobalContext.Properties["LogFileName"] = "CPI.log";
    }

    public static void Debug(string toWrite)
    {
        log.Debug(toWrite);
    }public static void Warn(string toWrite)
    {
        log.Warn(toWrite);
    }public static void Error(string toWrite)
    {
        log.Error(toWrite);
    }public static void Info(string toWrite)
    {
        log.Info(toWrite);
    }public static void Fatal(string toWrite)
    {
        log.Fatal(toWrite);
    }
}
