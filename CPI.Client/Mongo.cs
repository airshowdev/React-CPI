using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;

namespace CPI
{
    public class MongoConnection
    {

        MongoClient client;
        public IMongoDatabase Database { get; private set; }

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
