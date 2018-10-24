using Microsoft.VisualStudio.TestTools.UnitTesting;

using System.Collections.Generic;
using System.Threading.Tasks;
using System.IO;

using Moq;

using CPI.Client.Testing;
using CPI.Client.Controllers;
using CPI.Client.Models;

namespace CPI.Client.Tests
{
    [TestClass]
    public class ProjectControllerTest
    {
        [TestMethod]
        public async Task TestAllProjects()
        {

            Mock<IProjectController> mock = new Mock<IProjectController>();

            mock.Setup(x => x.AllProjectsAsync()).ReturnsAsync(new List<Stub>());

            IProjectController controller = mock.Object;

            IEnumerable<Stub> projectList = await controller.AllProjectsAsync();

            Assert.IsNotNull(projectList);
            mock.VerifyAll();
        }

        [TestMethod]
        public async Task TestGetProject()
        {
            Mock<IProjectController> mock = new Mock<IProjectController>();
            mock.Setup(x => x.GetProjectAsync(It.IsAny<string>())).ReturnsAsync(new Project());

            IProjectController controller = mock.Object;

            Project project = await controller.GetProjectAsync("5bcf1017b8e4a5764c5d7dd0");

            Assert.IsNotNull(project);
            mock.VerifyAll();
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

        public async Task TestGetDataCollection()
        {
            string id = "5bcf1017b8e4a5764c5d7dd0";

            Mock<IProjectController> mock = new Mock<IProjectController>();

            mock.Setup(x => x.DataCollection(It.IsAny<string>())).ReturnsAsync(new object());


            IProjectController controller = mock.Object;

            object collection = await controller.DataCollection(id);

            Assert.IsNotNull(collection);
            mock.VerifyAll();
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
            Assert.AreNotEqual("", actual);
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
            Assert.AreNotEqual("", actual);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]

        public async Task TestGetChampMeet()
        {
            string id = "5bcf1017b8e4a5764c5d7dd0";

            Mock<IProjectController> mock = new Mock<IProjectController>();

            mock.Setup(x => x.ChampMeet(It.IsAny<string>())).ReturnsAsync(new object());


            IProjectController controller = mock.Object;

            object collection = await controller.ChampMeet(id);

            Assert.IsNotNull(collection);
            mock.VerifyAll();
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
            Assert.AreNotEqual("", actual);
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
            Assert.AreNotEqual("", actual);
            Assert.AreEqual(expected, actual);
        }
        [TestMethod]

        public async Task TestGetDraftCharter()
        {
            string id = "5bcf1017b8e4a5764c5d7dd0";

            Mock<IProjectController> mock = new Mock<IProjectController>();

            mock.Setup(x => x.DraftCharter(It.IsAny<string>())).ReturnsAsync(new object());


            IProjectController controller = mock.Object;

            object collection = await controller.DraftCharter(id);

            Assert.IsNotNull(collection);
            mock.VerifyAll();
        }

        [TestMethod]
        public void TestGetDraftCharterWithNullId()
        {
            ProjectController controller = new ProjectController();
            string id = null;

            string expected = "404 ID not found";

            Task<object> task = controller.DraftCharter(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("", actual);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void TestGetDraftCharterWithEmptyId()
        {
            ProjectController controller = new ProjectController();
            string id = "";

            string expected = "404 ID not found";

            Task<object> task = controller.DraftCharter(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("", actual);
            Assert.AreEqual(expected, actual);
        }
        [TestMethod]
        public async Task TestGetCausesAndCounters()
        {
            string id = "5bcf1017b8e4a5764c5d7dd0";

            Mock<IProjectController> mock = new Mock<IProjectController>();

            mock.Setup(x => x.CausesAndCounters(It.IsAny<string>())).ReturnsAsync(new object());


            IProjectController controller = mock.Object;

            object collection = await controller.CausesAndCounters(id);

            Assert.IsNotNull(collection);
            mock.VerifyAll();
        }

        [TestMethod]
        public void TestGetCauseAndCountersWithNullId()
        {
            ProjectController controller = new ProjectController();
            string id = null;

            string expected = "404 ID not found";

            Task<object> task = controller.CausesAndCounters(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("", actual);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void TestGetCauseAndCountersWithEmptyId()
        {
            ProjectController controller = new ProjectController();
            string id = "";

            string expected = "404 ID not found";

            Task<object> task = controller.CausesAndCounters(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("", actual);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public async Task TestGetTeamLeadMeet()
        {
            string id = "5bcf1017b8e4a5764c5d7dd0";

            Mock<IProjectController> mock = new Mock<IProjectController>();

            mock.Setup(x => x.TeamLeadMeet(It.IsAny<string>())).ReturnsAsync(new object());


            IProjectController controller = mock.Object;

            object collection = await controller.TeamLeadMeet(id);

            Assert.IsNotNull(collection);
            mock.VerifyAll();
        }

        [TestMethod]
        public void TestGetTeamLeadMeetWithNullId()
        {
            ProjectController controller = new ProjectController();
            string id = null;

            string expected = "404 ID not found";

            Task<object> task = controller.TeamLeadMeet(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("", actual);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void TestGetTeamLeadMeetWithEmptyId()
        {
            ProjectController controller = new ProjectController();
            string id = "";

            string expected = "404 ID not found";

            Task<object> task = controller.TeamLeadMeet(id);
            task.Wait();
            string actual = (string)task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("", actual);
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public async Task TestUpdateProject()
        {
            Mock<IProjectController> mock = new Mock<IProjectController>();
            mock.Setup(x => x.UpdateProject()).ReturnsAsync(new MockHttpResponse());

            IProjectController controller = mock.Object;

            MockHttpResponse mockResponse = (MockHttpResponse)await controller.UpdateProject();

            Assert.IsNotNull(mockResponse);
            mock.VerifyAll();

        }

        [TestMethod]
        public async Task TestUpdateDataCollection()
        {
            Mock<IProjectController> mock = new Mock<IProjectController>();
            mock.Setup(x => x.UpdateDataCollection()).ReturnsAsync(new MockHttpResponse());

            IProjectController controller = mock.Object;

            MockHttpResponse mockResponse = (MockHttpResponse)await controller.UpdateDataCollection();

            Assert.IsNotNull(mockResponse);
            mock.VerifyAll();

        }
        [TestMethod]
        public async Task TestUpdateChampMeet()
        {
            Mock<IProjectController> mock = new Mock<IProjectController>();
            mock.Setup(x => x.UpdateChampMeet()).ReturnsAsync(new MockHttpResponse());

            IProjectController controller = mock.Object;

            MockHttpResponse mockResponse = (MockHttpResponse)await controller.UpdateChampMeet();

            Assert.IsNotNull(mockResponse);
            mock.VerifyAll();

        }
        [TestMethod]
        public async Task TestUpdateTeamLeadMeet()
        {
            Mock<IProjectController> mock = new Mock<IProjectController>();
            mock.Setup(x => x.UpdateTeamLeadMeet()).ReturnsAsync(new MockHttpResponse());

            IProjectController controller = mock.Object;

            MockHttpResponse mockResponse = (MockHttpResponse)await controller.UpdateTeamLeadMeet();

            Assert.IsNotNull(mockResponse);
            mock.VerifyAll();

        }
        [TestMethod]
        public async Task TestUpdateDraftCharter()
        {
            Mock<IProjectController> mock = new Mock<IProjectController>();
            mock.Setup(x => x.UpdateDraftCharter()).ReturnsAsync(new MockHttpResponse());

            IProjectController controller = mock.Object;

            MockHttpResponse mockResponse = (MockHttpResponse)await controller.UpdateDraftCharter();

            Assert.IsNotNull(mockResponse);
            mock.VerifyAll();

        }

        [TestMethod]
        public async Task TestDeleteProject()
        {
            string id = "5bcf1017b8e4a5764c5d7dd0";
            Mock<IProjectController> mock = new Mock<IProjectController>();
            mock.Setup(x => x.DeleteProject(It.IsAny<string>())).ReturnsAsync(new MockHttpResponse());

            IProjectController controller = mock.Object;

            MockHttpResponse mockResponse = (MockHttpResponse)await controller.DeleteProject(id);

            Assert.IsNotNull(mockResponse);
            mock.VerifyAll();
        }


        [TestMethod]
        public async Task TestDeleteProjectWithEmptyId()
        {
            string id = "";
            Mock<IProjectController> mock = new Mock<IProjectController>();
            mock.Setup(x => x.DeleteProject(It.IsAny<string>())).ReturnsAsync(new MockHttpResponse());

            IProjectController controller = mock.Object;

            MockHttpResponse mockResponse = (MockHttpResponse)await controller.DeleteProject(id);

            Assert.IsNotNull(mockResponse);
            mock.VerifyAll();
        }

        [TestMethod]
        public async Task TestDeleteProjectWithNullId()
        {
            string id = null;
            Mock<IProjectController> mock = new Mock<IProjectController>();
            mock.Setup(x => x.DeleteProject(It.IsAny<string>())).ReturnsAsync(new MockHttpResponse());

            IProjectController controller = mock.Object;

            MockHttpResponse mockResponse = (MockHttpResponse)await controller.DeleteProject(id);

            Assert.IsNotNull(mockResponse);
            mock.VerifyAll();
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
