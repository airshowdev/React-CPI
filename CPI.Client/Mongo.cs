using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;

using log4net;

namespace CPI
{
    public class MongoConnection
    {

        MongoClient client;
        IMongoDatabase Database { get; set; }

        private MongoConnection()
        {
          
        }

        public MongoConnection(string connectionString)
        {
            client = new MongoClient(connectionString);
        }

        public bool ConnectDatabase(string DatabaseName)
        {
            try
            {
                Database = client.GetDatabase(DatabaseName);
                return true;
            }
            catch (Exception E)
            {
                Console.WriteLine(E.ToString() + E.StackTrace);
                throw;
            }
        }

        public IMongoCollection<T> GetCollection<T>(string collectionName)
        {
            return Database.GetCollection<T>(collectionName);
        }
        
        

    }
}
