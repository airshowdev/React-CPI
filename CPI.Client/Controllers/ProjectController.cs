using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using CPI.Client.Models;
using System.IO;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Threading.Tasks;
using System.Net;
using System.Text;

using Newtonsoft.Json;

namespace CPI.Client.Controllers
{


    [Route("api/[controller]")]
    public class ProjectController : Controller
    {
        public string Index()
        {
            return "Try adding /AllProjects to your URL to get a list of all projects";
        }
        [HttpGet("[action]")]
        public string Test()
        {
            ServicePointManager.ServerCertificateValidationCallback += (send, certificate, chain, sslPolicyErrors) => { return true; };
            WebClient client = new WebClient();

            string dataString = JsonConvert.SerializeObject(
                new { json = new Project() }
                );

            return client.UploadString("https://localhost:51989/api/Project/CreateProject", dataString);

        }

        /*[HttpGet("[action]")]
        public IEnumerable<Project> AllProjects()
        {
            try
            {
                MongoConnection connection = new MongoConnection(GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                IList<Project> projectList = projects.Find<Project>(_ => true).ToList<Project>();

                return projectList;
            }
            catch (Exception E)
            {
                Console.WriteLine(E.ToString() + E.StackTrace);
                throw;
            }
        }*/

        [HttpGet("[action]")]
        public async Task<IEnumerable<Project>> AllProjectsAsync()
        {
            try
            {
                MongoConnection connection = new MongoConnection(GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                IAsyncCursor<Project> cursor = await projects.FindAsync(_ => true);

                return await cursor.ToListAsync<Project>();
            }
            catch (Exception E)
            {
                Console.WriteLine(E.ToString() + E.StackTrace);
                throw;
            }
        }

        /*[HttpGet("[action]")]
        public Project GetProject(string id)
        {
            try
            {

                ObjectId ID = new ObjectId(id);
                MongoConnection connection = new MongoConnection(GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                IList<Project> projectList = projects.Find(x => x.ID == ID).ToList<Project>();

                return projectList[0];
            }
            catch (Exception E)
            {
                Console.WriteLine(E.ToString() + E.StackTrace);
                throw;
            }
        }
        */

        [HttpPost("[action]")]
        public async Task<Project> GetProjectAsync(string id)
        {
            try
            {

                ObjectId ID = new ObjectId(id);
                MongoConnection connection = new MongoConnection(GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                Task<IAsyncCursor<Project>> enumerableTask = null;

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(id));

                //enumerableTask = projects.FindAsync(filter);

                //enumerableTask.Wait();

                IAsyncCursor<Project> cursor = enumerableTask.Result;


                return await cursor.FirstAsync<Project>();
            }
            catch (Exception E)
            {
                Console.WriteLine(E.ToString() + E.StackTrace);
                throw;
            }
        }

        [HttpPost("[action]")]
        public string CreateProject(string json)
        {

            try
            {
                Project newProject = Project.FromJson(json);
                MongoConnection connection = new MongoConnection(GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                return projects.InsertOneAsync(newProject).Id.ToString();
            }
            catch (Exception E)
            {
                Console.WriteLine(E.ToString() + E.StackTrace);
                throw;
            }
        }

        [HttpPatch("[action]")]
        public void SaveProject(string json)
        {

        }

        [HttpPost("[action]")]
        public bool Authenticate(string username, string passwordHash)
        {
            return false;
        }
        private string GetConnectionString()
        {
            using (Stream stream = new FileStream(".\\connectionString.txt", FileMode.Open))
            using (TextReader tr = new StreamReader(stream))
            {
                return tr.ReadLine();
            }
        }


    }
}