using Microsoft.VisualStudio.TestTools.UnitTesting;
using CPI.Client;
using CPI.Client.Controllers;
using CPI.Client.Models;
using System.Collections.Generic;
using MongoDB.Bson;
using System.Threading.Tasks;
using System.IO;

using Moq;

using CPI.Client.Testing;

namespace CPI.Client.Tests
{
    [TestClass]
    public class ProjectControllerTest
    {
        [TestMethod]
        public void TestAllProjects()
        {

            Mock<IProjectController> mock = new Mock<IProjectController>();
            IProjectController controller = new ProjectController();

            IEnumerable<Stub> list = new List<Stub>() { new Project().ToStub() };

            mock.Setup(x => x.AllProjectsAsync()).Returns(Task.FromResult(list));

            Task<IEnumerable<Stub>> task = controller.AllProjectsAsync();
            task.Wait();
            IEnumerable<Stub> projectList = task.Result;

            mock.VerifyAll();
        }

        [TestMethod]
        public void TestGetProject()
        {
            ProjectController controller = new ProjectController();
            string id = "5bb230c5d346df46e89dcb43";

            string expected = GetContents("./project.json");
            Task<Project> task = controller.GetProjectAsync(id);
            task.Wait();
            Project actual = task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("", actual);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void TestGetProjectWithEmptyID()
        {
            ProjectController controller = new ProjectController();
            string id = null;

            Task<Project> task = controller.GetProjectAsync(id);
            task.Wait();
            Project actual = task.Result;

            Assert.IsNull(actual);
        }

        [TestMethod]
        public void TestGetProjectWithNullID()
        {
            ProjectController controller = new ProjectController();
            string id = null;

            Task<Project> task = controller.GetProjectAsync(id);
            task.Wait();
            Project actual = task.Result;

            Assert.IsNull(actual);
        }

        [TestMethod]

        public void TestGetDataCollection()
        {
            ProjectController controller = new ProjectController();
            string id = "5bb230c5d346df46e89dcb43";
            string json = GetContents("./datacollection.json").Replace(" ","");
            DataCollection expected = DataCollection.FromJson(json);
            
            Task<object> task = controller.DataCollection(id);
            task.Wait();
            DataCollection actual = (DataCollection)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected.ToJson(), actual.ToJson());
        }

        [TestMethod]
        public void TestGetDataCollectionWithNullId()
        {
            ProjectController controller = new ProjectController();
            string id = null;

            string expected = "404 ID not found";
            
            Task<object> task = controller.DataCollection(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void TestGetDataCollectionWithEmptyId()
        {
            ProjectController controller = new ProjectController();
            string id = "";

            string expected = "404 ID not found";
            
            Task<object> task = controller.DataCollection(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected, actual);
        }
        [TestMethod]

        public void TestGetChampMeet()
        {
            ProjectController controller = new ProjectController();
            string id = "5bb230c5d346df46e89dcb43";
            string json = GetContents("./ChampMeet.json").Replace(" ","");
            Champion expected = Champion.FromJson(json);
            
            Task<object> task = controller.ChampMeet(id);
            task.Wait();
            Champion actual = (Champion)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected.ToJson(), actual.ToJson());
        }

        [TestMethod]
        public void TestGetChampMeetWithNullId()
        {
            ProjectController controller = new ProjectController();
            string id = null;

            string expected = "404 ID not found";
            
            Task<object> task = controller.ChampMeet(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void TestGetChampMeetWithEmptyId()
        {
            ProjectController controller = new ProjectController();
            string id = "";

            string expected = "404 ID not found";
            
            Task<object> task = controller.ChampMeet(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected, actual);
        }
        [TestMethod]

        public void TestGetTeamLeadMeeting()
        {
            ProjectController controller = new ProjectController();
            string id = "5bb230c5d346df46e89dcb43";
            string json = GetContents("./TeamLeadMeet.json").Replace(" ","");
            TeamLeadMeeting expected = TeamLeadMeeting.FromJson(json);
            
            Task<object> task = controller.TeamLeadMeet(id);
            task.Wait();
            TeamLeadMeeting actual = (TeamLeadMeeting)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected.ToJson(), actual.ToJson());
        }

        [TestMethod]
        public void TestGetTeamLeadMeetingWithNullId()
        {
            ProjectController controller = new ProjectController();
            string id = null;

            string expected = "404 ID not found";
            
            Task<object> task = controller.TeamLeadMeet(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void TestGetTeamLeadMeetingWithEmptyId()
        {
            ProjectController controller = new ProjectController();
            string id = "";

            string expected = "404 ID not found";
            
            Task<object> task = controller.TeamLeadMeet(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected, actual);
        }
        [TestMethod]
        public void TestGetCauseAndCounters()
        {
            ProjectController controller = new ProjectController();
            string id = "5bb230c5d346df46e89dcb43";
            string json = GetContents("./CauseAndCounters.json").Replace(" ","");
            RootCause expected = RootCause.FromJson(json);
            
            Task<object> task = controller.CauseAndCounters(id);
            task.Wait();
            RootCause actual = (RootCause)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected.ToJson(), actual.ToJson());
        }

        [TestMethod]
        public void TestGetCauseAndCountersWithNullId()
        {
            ProjectController controller = new ProjectController();
            string id = null;

            string expected = "404 ID not found";
            
            Task<object> task = controller.TeamLeadMeet(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void TestGetCauseAndCountersWithEmptyId()
        {
            ProjectController controller = new ProjectController();
            string id = "";

            string expected = "404 ID not found";
            
            Task<object> task = controller.TeamLeadMeet(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected, actual);
        }
        [TestMethod]
        public void TestGetDraftCharter()
        {
            ProjectController controller = new ProjectController();
            string id = "5bb230c5d346df46e89dcb43";
            string expected = GetContents("./DraftCharter.json").Replace(" ","");



            Task<object> task = controller.DraftCharter(id);
            task.Wait();
            string actual = task.Result.ToJson().Replace(" ","");
            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected.ToLower(),actual.ToLower());
        }

        [TestMethod]
        public void TestGetDraftCharterWithNullId()
        {
            ProjectController controller = new ProjectController();
            string id = null;

            string expected = "404 ID not found";
            
            Task<object> task = controller.TeamLeadMeet(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void TestGetDraftCharterWithEmptyId()
        {
            ProjectController controller = new ProjectController();
            string id = "";

            string expected = "404 ID not found";
            
            Task<object> task = controller.TeamLeadMeet(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("",actual);
            Assert.AreEqual(expected, actual);
        }

        private string GetContents(string filePath)
        {
            using (Stream stream = new FileStream(filePath, FileMode.Open))
            using (TextReader tr = new StreamReader(stream))
            {
                return tr.ReadToEnd();
            }
        }
    }
}
