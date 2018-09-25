using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using CPI.Client.Models;
using System.IO;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Threading.Tasks;

namespace CPI.Client.Controllers
{


    [Route("api/[controller]")]
    public class ProjectController : Controller
    {
        public string Index()
        {
            return "Worked";
        }

        [HttpGet("[action]")]
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
}

        [HttpGet("[action]")]
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

        [HttpPost("[action]")]
        public void CreateProject(string json)
        {
            try
            {
                Project newProject = Project.FromJson(json);
                MongoConnection connection = new MongoConnection(GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                projects.InsertOneAsync(newProject);
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