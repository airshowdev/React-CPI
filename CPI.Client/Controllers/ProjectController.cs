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
using CPI.Client.Testing;
using System.Runtime.Serialization.Formatters.Binary;
using Microsoft.AspNetCore.Http;

namespace CPI.Client.Controllers
{

    [Route("api/[controller]")]
    public class ProjectController :  Controller , IProjectController
    {

        MongoClient Client = null;


        /// <summary>
        /// Post action with data formar
        /// {   id:"",
        ///     DataCollection:{Elements: [
        ///         {Goal: "", Actual:"", Name:"", Type:""}],
        ///     Type: "",
        ///     Standard: ""} }
        /// </summary>
        /// <returns>string</returns>
        [HttpPost("[action]")]
        public async Task<HttpResponse> UpdateDataCollection()
        {

            string json = "";

            JObject jObj;
            using (StreamReader reader = new StreamReader(Request.Body))
            {
                json = reader.ReadToEnd();

                jObj = (JObject) JsonConvert.DeserializeObject(json);
            }

            string projID = jObj.GetValue("_id").ToString();

			JObject jCollection = (JObject)jObj.GetValue("DataCollection");

            DataCollection collection = CPI.Client.DataCollection.FromJson(jCollection.ToString());


            try
            {
                MongoClient client;

                if (Client == null)
                {
                    Client = new MongoClient(await GetConnectionString());
                }
                client = Client;


                IMongoDatabase database = client.GetDatabase("CPI_Database");

                IMongoCollection<Project> projects = database.GetCollection<Project>("Projects");
                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(projID));

                Project projToUpdate = await (await projects.FindAsync<Project>(filter)).FirstAsync();

                UpdateDefinition<Project> updateDefinition = Builders<Project>.Update.Set(x => x.DataCollection, collection);

                UpdateResult result = projects.UpdateOne(x => x.id == new ObjectId(projID), updateDefinition);

                Response.Body = result.ToStream();
            }

            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                Response.Body = E.ToStream();
            }

            return Response;
            
        }

        [HttpPost("[action]")]
        public async Task<HttpResponse> UpdateChampMeet()
        {
            string json = "";

            JObject jObj;
            using (StreamReader reader = new StreamReader(Request.Body))
            {
                json = reader.ReadToEnd();

                jObj = (JObject)JsonConvert.DeserializeObject(json);
            }

            string projID = jObj.GetValue("_id").ToString();

            JObject jChamp = (JObject)jObj.GetValue("Champion");


            Champion champion = Champion.FromJson(jChamp.ToString());

            try
            {
                MongoClient client;
                if (Client == null)
                {
                    Client = new MongoClient(await GetConnectionString());
                }
                client = Client;


                IMongoDatabase database = client.GetDatabase("CPI_Database");

                IMongoCollection<Project> projects = database.GetCollection<Project>("Projects");
                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(projID));

                Project projToUpdate = await (await projects.FindAsync<Project>(filter)).FirstAsync();

                UpdateDefinition<Project> updateDefinition = Builders<Project>.Update.Set(x => x.Champion, champion);

                UpdateResult result = projects.UpdateOne(x => x.id == new ObjectId(projID), updateDefinition);

                Response.Body = result.ToStream();
            }

            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                Response.Body = E.ToStream();
            }

            return Response;
        }
        [HttpPost("[action]")]
        public async Task<HttpResponse> UpdateTeamLeadMeet()
        {
            string json = "";

            JObject jObj;
            using (StreamReader reader = new StreamReader(Request.Body))
            {
                json = reader.ReadToEnd();

                jObj = (JObject)JsonConvert.DeserializeObject(json);
            }

            string projID = jObj.GetValue("_id").ToString();

            JObject jMeeting = (JObject)jObj.GetValue("TeamLeadMeeting");

            TeamLeadMeeting meeting = TeamLeadMeeting.FromJson(jMeeting.ToString());

            try
            {
                MongoClient client;
                if (Client == null)
                {
                    Client = new MongoClient( await GetConnectionString());
                }
                 client = Client;
                

                IMongoDatabase database = client.GetDatabase("CPI_Database");

                IMongoCollection<Project> projects = database.GetCollection<Project>("Projects");

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(projID));

                Project projToUpdate = await (await projects.FindAsync<Project>(filter)).FirstAsync();

                UpdateDefinition<Project> updateDefinition = Builders<Project>.Update.Set(x => x.TeamLeadMeeting, meeting);

                UpdateResult result = projects.UpdateOne(x => x.id == new ObjectId(projID), updateDefinition);

                Response.Body = result.ToStream();
            }

            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                Response.Body = E.ToStream();
            }

            return Response;
        }
        [HttpPost("[action]")]
        public async Task<HttpResponse> UpdateDraftCharter()
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
                MongoClient client;
                if (Client == null)
                {
                    Client = new MongoClient(await GetConnectionString());
                }
                client = Client;


                IMongoDatabase database = client.GetDatabase("CPI_Database");

                IMongoCollection<Project> projects = database.GetCollection<Project>("Projects");

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

                Response.Body = result.ToStream();
            }

            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                Response.Body = E.ToStream();
            }

            return Response;
        }
        [HttpPost("[action]")]
        public async Task<HttpResponse> UpdateRootCauses()
        {
            string json = "";

            JObject jObj;
            using (StreamReader reader = new StreamReader(Request.Body))
            {
                json = reader.ReadToEnd();

                jObj = (JObject)JsonConvert.DeserializeObject(json);
            }

            string projID = jObj.GetValue("_id").ToString();

            JObject jCauses = (JObject)jObj.GetValue("RootCauses");

            IList<RootCause> rootCause = Converter.ListFromJson<RootCause>(jCauses.ToJson());

            try
            {
                MongoClient client;
                if (Client == null)
                {
                    Client = new MongoClient(await GetConnectionString());
                }
                client = Client;


                IMongoDatabase database = client.GetDatabase("CPI_Database");

                IMongoCollection<Project> projects = database.GetCollection<Project>("Projects");

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(projID));

                Project projToUpdate = await (await projects.FindAsync<Project>(filter)).FirstAsync();

                UpdateDefinition<Project> updateDefinition = Builders<Project>.Update.Set(x => x.RootCauses, rootCause);

                UpdateResult result = projects.UpdateOne(x => x.id == new ObjectId(projID), updateDefinition);

                Response.Body = result.ToStream();
            }

            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                Response.Body = E.ToStream();
            }

            return Response;
        }


        [HttpGet("[action]")]
        public async Task<IEnumerable<Stub>> AllProjectsAsync()
        {

            Log4NetLogger.Info("Get all projects process started");

            try
            {
                MongoClient client;
                if (Client == null)
                {
                    Client = new MongoClient(await GetConnectionString());
                }
                client = Client;


                IMongoDatabase database = client.GetDatabase("CPI_Database");

                IMongoCollection<Project> projects = database.GetCollection<Project>("Projects");

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

                MongoClient client;

                if (Client == null)
                {
                    Client = new MongoClient(await GetConnectionString());
                }

                client = Client;


                IMongoDatabase database = client.GetDatabase("CPI_Database");

                IMongoCollection<Project> projects = database.GetCollection<Project>("Projects");

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
        public async Task<HttpResponse> CreateProject()
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

                Project newProject = Project.FromJson(json);

                MongoClient client;
                if (Client == null)
                {
                    Client = new MongoClient(await GetConnectionString());
                }
                client = Client;


                IMongoDatabase database = client.GetDatabase("CPI_Database");

                IMongoCollection<Project> projects = database.GetCollection<Project>("Projects");
                await projects.InsertOneAsync(newProject);

                Log4NetLogger.Info("Create project process completed succesfully");

                Response.Body = newProject.id.ToStream();

            }

            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                Response.Body = E.ToStream();
            }

            return Response;
        }

        [HttpGet("[action]")]
        public async Task<HttpResponse> DeleteProject(string id)
        {
            try
            {
                MongoClient client;
                if (Client == null)
                {
                    Client = new MongoClient(await GetConnectionString());
                }
                client = Client;


                IMongoDatabase database = client.GetDatabase("CPI_Database");

                IMongoCollection<Project> projects = database.GetCollection<Project>("Projects");

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(id));

                DeleteResult result = await projects.DeleteOneAsync(filter);
                Response.Body = result.ToStream();
            }

            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                Response.Body = E.ToStream();
            }

            return Response;
        }

        [HttpPost("[action]")]
        public async Task<HttpResponse> UpdateProject()
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

                Project updateProject = Project.FromJson(json);
                updateProject.ID = id;
                MongoClient client;

                if (Client == null)
                {
                    Client = new MongoClient(await GetConnectionString());
                }
                client = Client;


                IMongoDatabase database = client.GetDatabase("CPI_Database");

                IMongoCollection<Project> projects = database.GetCollection<Project>("Projects");

                FilterDefinition<Project> filter = Builders<Project>.Filter.Eq("_id", new ObjectId(id));


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

                Response.Body = result.ToStream();
            }

            catch (Exception E)
            {
                Log4NetLogger.Error(E);
                Response.Body = E.ToStream();
            }

            return Response;
        }

        private async Task<object> GetPage(string id, string page)
        {
            if (String.IsNullOrEmpty(id))
            {
                return "404 ID not found";
            }
            else if (String.IsNullOrEmpty(page))
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
        public async Task<object> CausesAndCounters(string id)
        {
            return await GetPage(id, "CauseAndCounters");
        }
        public static async Task<string> GetConnectionString()
        {
            try
            {
                string json = "";
                Log4NetLogger.Info("Get connection string process started");
                using (Stream stream = new FileStream(".\\connectionString.json", FileMode.Open))
                using (TextReader tr = new StreamReader(stream))
                {

                    Log4NetLogger.Info("Get connection string process completed succesfully");
                    json = await tr.ReadLineAsync();
                }

                JObject connStringObj = JsonConvert.DeserializeObject<JObject>(json);

                #if DEBUG
                    return connStringObj.GetValue("debug").ToString();
                #else
                    return connStringObj.GetValue("prod").ToString();
                #endif
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

    public static class Converter
    {
        public static IList<T> ListFromJson<T>(string json)
        {
            IList<T> list = JsonConvert.DeserializeObject<IList<T>>(json);

            return list;
        }

        public static Stream ToStream(this object obj)
        {
            BinaryFormatter formater = new BinaryFormatter();
            using (MemoryStream ms = new MemoryStream())
            {
                formater.Serialize(ms, obj);
                return ms;
            }

        }
    }
}