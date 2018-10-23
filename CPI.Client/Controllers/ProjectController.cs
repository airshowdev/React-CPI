using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Security.Cryptography.X509Certificates;
using System.ComponentModel;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using MongoDB.Driver;
using MongoDB.Bson;

using Microsoft.AspNetCore.Mvc;

using CPI.Client.Models;
using CPI.Client;


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

        [HttpPost("[action]")]
        public async Task<string> UpdateDataCollection()
        {

            string json = "";

            JObject jObj;
            using (StreamReader reader = new StreamReader(Request.Body))
            {
                json = reader.ReadToEnd();

                jObj = (JObject) JsonConvert.DeserializeObject(json);
            }

            string projID = jObj.GetValue("_id").ToString();

            /*
             id: "",
             DataCollection: {}
             */


			JObject jCollection = (JObject)jObj.GetValue("DataCollection");

            DataCollection collection = Client.DataCollection.FromJson(jCollection.ToString());


            try
            {
                MongoConnection connection = new MongoConnection(await GetConnectionString());

                connection.ConnectDatabase("CPI_Database");

                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(projID));

                Project projToUpdate = await (await projects.FindAsync<Project>(filter)).FirstAsync();

                UpdateDefinition<Project> updateDefinition = Builders<Project>.Update.Set(x => x.DataCollection, collection);

                UpdateResult result = projects.UpdateOne(x => x.id == new ObjectId(projID), updateDefinition);
                return result.ToJson();
            }

            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                return E.ToString();
            }
            
        }

        [HttpPost("[action]")]
        public async Task<string> UpdateChampMeet()
        {
            string json = "";

            JObject jObj;
            using (StreamReader reader = new StreamReader(Request.Body))
            {
                json = reader.ReadToEnd();

                jObj = (JObject)JsonConvert.DeserializeObject(json);
            }

            string projID = jObj.GetValue("_id").ToString();

            //Change to get object from JObject

            json = json.Replace("\"_id\":\"" + projID + "\",", "");

            Champion champion = Champion.FromJson(json);

            try
            {
                MongoConnection connection = new MongoConnection(await GetConnectionString());

                connection.ConnectDatabase("CPI_Database");

                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(projID));

                Project projToUpdate = await (await projects.FindAsync<Project>(filter)).FirstAsync();

                UpdateDefinition<Project> updateDefinition = Builders<Project>.Update.Set(x => x.Champion, champion);

                UpdateResult result = projects.UpdateOne(x => x.id == new ObjectId(projID), updateDefinition);

                return result.ToString();
            }

            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                return E.ToString();
            }
        }
        [HttpPost("[action]")]
        public async Task<string> UpdateTeamLeadMeet()
        {
            string json = "";

            JObject jObj;
            using (StreamReader reader = new StreamReader(Request.Body))
            {
                json = reader.ReadToEnd();

                jObj = (JObject)JsonConvert.DeserializeObject(json);
            }

            string projID = jObj.GetValue("_id").ToString();

            json = json.Replace("\"_id\":\"" + projID + "\",", "");

            TeamLeadMeeting meeting = TeamLeadMeeting.FromJson(json);

            try
            {
                MongoConnection connection = new MongoConnection(await GetConnectionString());

                connection.ConnectDatabase("CPI_Database");

                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(projID));

                Project projToUpdate = await (await projects.FindAsync<Project>(filter)).FirstAsync();

                UpdateDefinition<Project> updateDefinition = Builders<Project>.Update.Set(x => x.TeamLeadMeeting, meeting);

                UpdateResult result = projects.UpdateOne(x => x.id == new ObjectId(projID), updateDefinition);

                return result.ToString();
            }

            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                return E.ToString();
            }
        }
        [HttpPost("[action]")]
        public async Task<string> UpdateDraftCharter()
        {
            string json = "";

            JObject jObj;
            using (StreamReader reader = new StreamReader(Request.Body))
            {
                json = reader.ReadToEnd();

                jObj = (JObject)JsonConvert.DeserializeObject(json);
            }

            string projID = jObj.GetValue("_id").ToString();;

            try
            {
                MongoConnection connection = new MongoConnection(await GetConnectionString());

                connection.ConnectDatabase("CPI_Database");

                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(projID));

                Project projToUpdate = await (await projects.FindAsync<Project>(filter)).FirstAsync();

                UpdateDefinition<Project> updateDefinition = Builders<Project>.Update.Set(x => x.Dates.Begin, (jObj.GetValue("Dates") as JObject).GetValue("Begin"))
                    .Set(x => x.Dates.End, (jObj.GetValue("Dates") as JObject).GetValue("End"))
                    .Set(x => x.Name, jObj.GetValue("Name").ToString())
                    .Set(x => x.Unit, jObj.GetValue("Unit").ToString())
                    .Set(x => x.Creator, jObj.GetValue("Creator").ToString())
                    .Set(x => x.Champion, Champion.FromJson(jObj.GetValue("Champion").ToString()))
                    .Set(x => x.TeamLeads, JsonConvert.DeserializeObject<IList<string>>(jObj.GetValue("TeamLeads").ToString()))
                    .Set(x => x.Facilitators, JsonConvert.DeserializeObject<IList<string>>(jObj.GetValue("Facilitators").ToString()))
                    .Set(x => x.Mentor, jObj.GetValue("Mentor").ToString())
                    .Set(x => x.TeamLeadMeeting, TeamLeadMeeting.FromJson(jObj.GetValue("TeamLeadMeeting").ToString()))
                    .Set(x => x.DesiredEffects, DesiredEffects.FromJson(jObj.GetValue("DesiredEffects").ToString()));
                UpdateResult result = projects.UpdateOne(x => x.id == new ObjectId(projID), updateDefinition);

                return result.ToString();
            }

            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                return E.ToString();
            }
        }

        //[HttpPost("[action]")]
        //public async Task<string> UpdateRootCauses()
        //{
        //    string json = "";

        //    JObject jObj;
        //    using (StreamReader reader = new StreamReader(Request.Body))
        //    {
        //        json = reader.ReadToEnd();

        //        jObj = (JObject)JsonConvert.DeserializeObject(json);
        //    }

        //    string projID = jObj.GetValue("_id").ToString();

        //    json = json.Replace("\"_id\":\"" + projID + "\",", "");

        //    RootCause rootCause = RootCause.FromJson(json);

        //    try
        //    {
        //        MongoConnection connection = new MongoConnection(await GetConnectionString());

        //        connection.ConnectDatabase("CPI_Database");

        //        IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

        //        FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(projID));

        //        Project projToUpdate = await (await projects.FindAsync<Project>(filter)).FirstAsync();

        //        UpdateDefinition<Project> updateDefinition = Builders<Project>.Update.Set(x => x.RootCauses, rootCause);

        //        UpdateResult result = projects.UpdateOne(x => x.id == new ObjectId(projID), updateDefinition);

        //        return result.ToString();
        //    }

        //    catch (Exception E)
        //    {
        //        Log4NetLogger.Error(E);
        //        return E.ToString();
        //    }
        //}


        [HttpGet("[action]")]
        public async Task<IEnumerable<Stub>> AllProjectsAsync()
        {

            Log4NetLogger.Info("Get all projects process started");


            
            try
            {
                MongoConnection connection = new MongoConnection( await GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                IList<Project> returnProjects = await (await projects.FindAsync(_ => true)).ToListAsync();

                IList<Stub> stubs = new List<Stub>();

                foreach (Project proj in returnProjects)
                {
                    stubs.Add(proj.ToStub());
                }


                Log4NetLogger.Info("Get all projects process completed succesfully");
                return stubs;
            }
            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                throw;
            }
        }


        [HttpGet("[action]")]
        public async Task<Project> GetProjectAsync(string id)
        {

            Log4NetLogger.Info($"Get project process started with parameter id = {id ?? "null"}");
            try
            {

                if (String.IsNullOrEmpty(id))
                {
                    return null;
                }
                MongoConnection connection = new MongoConnection(await GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(id));

                IAsyncCursor<Project> cursor = await projects.FindAsync<Project>(filter);

                Log4NetLogger.Info("Get project process completed succesfully");

                return (await cursor.FirstAsync());
            }
            catch (Exception E)
            {
                Log4NetLogger.Error("ID ==" + id + "\n" + E.ToString());
                throw;
            }
        }

        [HttpPost("[action]")]
        public async Task<string> CreateProject()
        {
            Log4NetLogger.Info("Create project process started");
            try
            {
                string json = "";

                using (Stream stream = Request.Body)
                using (StreamReader sr = new StreamReader(stream))
                {
                    json = sr.ReadToEnd();
                }

                JObject project = (JObject)JsonConvert.DeserializeObject(json);

                string name = project.GetValue("Creator").ToString();
                string assignedBase = project.GetValue("Base").ToString();
                string unit = project.GetValue("Unit").ToString();
                string projectName = project.GetValue("Name").ToString();

                //Change to is null or empty
                if (name == "" || name == null)
                {
                    return "Name cannot be null or empty";
                }
                else if (assignedBase == "" || assignedBase == null)
                {
                    return "Base cannot be null or empty";
                }
                else if (unit == "" || unit == null)
                {
                    return "Unit cannot be null or empty";
                }
                else if (projectName == "" || projectName == null)
                {
                    return "Project Name cannot be null or empty";
                }
                else
                {

                    Project newProject = Project.FromJson(json);
                    newProject.TeamLeadMeeting.SipocRows = new SipocRow[7];
                    MongoConnection connection = new MongoConnection( await GetConnectionString());
                    connection.ConnectDatabase("CPI_Database");
                    IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                    await projects.InsertOneAsync(newProject);

                    Log4NetLogger.Info("Create project process completed succesfully");

                    return newProject.ID;
                }
            }
            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                return E.ToString();
            }
        }

        [HttpGet("[action]")]
        public async Task<string> DeleteProject(string id)
        {
            try
            {
                if (id == null || id == "")
                {
                    return " 404 ";
                }
                MongoConnection connection = new MongoConnection( await GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(id));

                DeleteResult result = await projects.DeleteOneAsync(filter);
                if (result.DeletedCount == 0)
                {
                    return " 404 ";
                }
                return result.ToString();
            }
            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                return E.ToString();
            }
        }

        [HttpPost("[action]")]
        public async Task<long> UpdateProject()
        {

            Log4NetLogger.Info("Update project process started");

            try
            {
                string json = "";

                using (Stream stream = Request.Body)
                using (StreamReader sr = new StreamReader(stream))
                {
                    json = sr.ReadToEnd();
                }

                JObject project = (JObject)JsonConvert.DeserializeObject(json);

                string id = project.GetValue("_id").ToString();

                if (id == null || id == "")
                {
                    return 404;
                }

                Project updateProject = Project.FromJson(json);
                updateProject.ID = id;
                MongoConnection connection = new MongoConnection( await GetConnectionString());
                connection.ConnectDatabase("CPI_Database");
                IMongoCollection<Project> projects = connection.GetCollection<Project>("Projects");


                FilterDefinition<Project> filter = Builders<Project>.Filter.Where(x => x.id == updateProject.id);

                //Project oldProj = await projects.Find(filter).FirstAsync();

                UpdateDefinition<Project> updateDef = Builders<Project>.Update
                    .Set(x => x.MajCom, updateProject.MajCom)
                    .Set(x => x.Base, updateProject.Base)
                    .Set(x => x.Creator, updateProject.Creator)
                    .Set(x => x.Unit, updateProject.Unit)
                    .Set(x => x.WingDirectorate, updateProject.WingDirectorate)
                    .Set(x => x.Evaluators, updateProject.Evaluators)
                    .Set(x => x.TeamLeads, updateProject.TeamLeads)
                    .Set(x => x.Facilitators, updateProject.Facilitators)
                    .Set(x => x.ProcessOwner, updateProject.ProcessOwner)
                    .Set(x => x.Mentor, updateProject.Mentor)
                    .Set(x => x.DataCollection, updateProject.DataCollection)
                    .Set(x => x.Champion, updateProject.Champion)
                    .Set(x => x.TeamLeadMeeting, updateProject.TeamLeadMeeting)
                    .Set(x => x.DraftCharter, updateProject.DraftCharter)
                    .Set(x => x.RootCauses, updateProject.RootCauses)
                    .Set(x => x.DesiredEffects, updateProject.DesiredEffects)
                    .Set(x => x.Dates, updateProject.Dates)
                    .Set(x => x.Name, updateProject.Name);

                UpdateResult result = await projects.UpdateOneAsync(filter, updateDef);


                Log4NetLogger.Info("Update project process completed succesfully");

                return result.ModifiedCount;
            }
            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                throw;
            }
        }

        private async Task<object> GetPage(string id, string page)
        {
            if (id == null || id == "")
            {
                return "404 ID not found";
            }
            else if (page == null || page == "")
            {
                return "404 Page not found";
            }
            Log4NetLogger.Info($"Get page process started with parameters id = {id??"null"}, page = {page??"null"}");

            object returnObj = null;
            try
            {
                Project project = await GetProjectAsync(id);


                switch (page.ToUpper())
                {
                    case "DATACOLLECTION":
                        returnObj =  project.DataCollection;
                        break;
                    case "CHAMPMEET":
                        returnObj =  project.Champion;
                        break;
                    case "TEAMLEADMEET":
                        returnObj = project.TeamLeadMeeting;
                        break;
                    case "DRAFTCHARTER":
                        returnObj = new
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
                        break;
                    case "CAUSEANDCOUNTERS":
                        returnObj = project.RootCauses;
                        break;
                    default:
                        returnObj = null;
                        break;
                }
            }
            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                throw;
            }

            Log4NetLogger.Info("Get page process completed succesfully");

            return returnObj;
        }

        [HttpGet("[action]")]
        public async Task<object> DraftCharter(string id)
        {
            return await GetPage(id, "DraftCharter");
        }
        [HttpGet("[action]")]
        public async Task<object> DataCollection(string id)
        {
            return (await GetPage(id, "DataCollection"));
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
        private async Task<string> GetConnectionString()
        {
            try
            {
                Log4NetLogger.Info("Get connection string process started");
                using (Stream stream = new FileStream(".\\connectionString.txt", FileMode.Open))
                using (TextReader tr = new StreamReader(stream))
                {

                    Log4NetLogger.Info("Get connection string process completed succesfully");
                    return await tr.ReadLineAsync();
                }
            }
            catch (ArgumentOutOfRangeException oorEx)
            {
                Log4NetLogger.Error(oorEx);
                return null;
            }
            catch (ObjectDisposedException odEx)
            {
                Log4NetLogger.Error(odEx);
                return null;
            }
            catch (InvalidOperationException invalidOpEx)
            {
                Log4NetLogger.Error(invalidOpEx);
                return null;
            }
        }

       
    }
}