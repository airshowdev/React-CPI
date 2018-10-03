using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Net;
using System.Net.Http;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using MongoDB.Driver;
using MongoDB.Bson;

using Microsoft.AspNetCore.Mvc;

using CPI.Client.Models;

namespace CPI.Client.Controllers
{


    [Route("api/[controller]")]
    public class ProjectController : Controller
    {
        [HttpGet("[action]")]
        public async Task<string> Test(string function = "getAll", string ID = "", string json = "")
        {

            string Host = "https://" + HttpContext.Request.Host;

            ServicePointManager.ServerCertificateValidationCallback += (send, certificate, chain, sslPolicyErrors) => { return true; };

            HttpClient client = new HttpClient();

            HttpResponseMessage response = null;

            if (function.ToUpper() == "create".ToUpper())
            {
                HttpContent content = new StringContent(new Project().ToJson());
                response = await client.PostAsync(Host + "/api/Project/CreateProject", content);
            }
            else if (function.ToUpper() == "getAll".ToUpper())
            {
                response = await client.GetAsync(Host + "/api/Project/AllProjectsAsync");
            }
            else if (function.ToUpper() == "getId".ToUpper())
            {
                string idJson = new { id = ID }.ToJson();
                HttpContent content = new StringContent(idJson);
                response = await client.PostAsync(Host + "/api/Project/GetProjectAsync", content);
            }
            else if (function.ToUpper() == "update".ToUpper())
            {
                HttpContent content = new StringContent(json);
                response = await client.PatchAsync(Host + "/api/Project/UpdateProject", content);
            }

            return (response == null) ? null : await response.Content.ReadAsStringAsync();

        }


        [HttpGet("[action]")]
        public async Task<IEnumerable<Stub>> AllProjectsAsync()
        {
            try
            {
                MongoConnection connection = new MongoConnection(GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                IList<Project> returnProjects = await (await projects.FindAsync(_ => true)).ToListAsync();

                IList<Stub> stubs = new List<Stub>();

                foreach (Project proj in returnProjects)
                {
                    stubs.Add(proj.ToStub());
                }

                return stubs;
            }
            catch (Exception E)
            {
                throw;
            }
        }


        [HttpGet("[action]")]
        public async Task<Project> GetProjectAsync(string id)
        {
            try
            {
                MongoConnection connection = new MongoConnection(GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(id));

                IAsyncCursor<Project> cursor = await projects.FindAsync<Project>(filter);

                return await cursor.FirstAsync();
            }
            catch (Exception E)
            {
                Console.WriteLine(E.ToString() + E.StackTrace);
                throw;
            }
        }

        [HttpPost("[action]")]
        public async Task<string> CreateProject()
        {

            try
            {
                string json = "";

                using (Stream stream = Request.Body)
                using (StreamReader sr = new StreamReader(stream))
                {
                    json = sr.ReadToEnd();
                }

                JObject project = (JObject)JsonConvert.DeserializeObject(json);

                

                Project newProject = Project.FromJson(json);
                
                MongoConnection connection = new MongoConnection(GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                await projects.InsertOneAsync(newProject);

                return newProject.Id.ToString();
            }
            catch (Exception E)
            {
                Console.WriteLine(E.ToString() + E.StackTrace);
                throw;
            }
        }

        [HttpPost("[action]")]
        public async Task<long> UpdateProject()
        {

            string json = "";

            using (Stream stream = Request.Body)
            using (StreamReader sr = new StreamReader(stream))
            {
                json = sr.ReadToEnd();
            }

            JObject project = (JObject)JsonConvert.DeserializeObject(json);

            ObjectId ID = new ObjectId(project.GetValue("_id").ToString());

            Project updateProject = Project.FromJson(json);
            updateProject.Id = ID;
            MongoConnection connection = new MongoConnection(GetConnectionString());
            connection.ConnectDatabase("CPI_Database");
            IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

            ReplaceOneResult result = await projects.ReplaceOneAsync(x => x.Id == updateProject.Id, updateProject);

            return result.ModifiedCount;
        }

        [HttpPost("[action]")]
        public bool Authenticate(string username, string passwordHash)
        {
            return false;
        }

        [HttpGet("[action]")]
        private async Task<object> GetPage(string id, string page)
        {

            if (page == null || id == null)
            {
                return null;
            }
            Project project = await GetProjectAsync(id);


            switch (page.ToUpper())
            {
                case "DATACOLLECTION":
                    return project.DataCollection;
                case "CHAMPMEET":
                    return project.Champion;
                case "TEAMLEADMEET":
                    return project.TeamLeadMeeting;
                case "DRAFTCHARTER":
                    return new
                    {
                        project.Dates,
                        project.Name,
                        project.Unit,
                        project.Base,
                        project.Creator,
                        project.Champion,
                        project.TeamLeads,
                        project.Facilitators,
                        project.Mentor,
                        project.TeamLeadMeeting,
                        project.DesiredEffects,
                        project.DraftCharter
                    };
                case "CAUSEANDCOUNTERS":
                    return project.RootCauses;
                default:
                    return null;
            }
        }

        [HttpGet("[action]")]
        public async Task<object> DraftCharter(string id)
        {
            return await GetPage(id, "DraftCharter");
        }
        [HttpGet("[action]")]
        public async Task<object> DataCollection(string id)
        {
            return await GetPage(id, "DataCollection");
        }
        [HttpGet("[action]")]
        public async Task<object> ChampMeet(string id)
        {
            return await GetPage(id, "ChampMeet");
        }
        [HttpGet("[action]")]
        public async Task<object> TeamLeadMeet(string id)
        {
            return await GetPage(id, "TeamLeadMeet");
        }
        [HttpGet("[action]")]
        public async Task<object> CauseAndCounters(string id)
        {
            return await GetPage(id, "CauseAndCounters");
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