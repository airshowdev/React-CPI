using Microsoft.VisualStudio.TestTools.UnitTesting;
using CPI.Client;
using CPI.Client.Controllers;
using CPI.Client.Models;
using System.Collections.Generic;
using MongoDB.Bson;
using System.Threading.Tasks;

namespace CPI.Client.Tests
{
    [TestClass]
    public class ProjectControllerTestd
    {
        [TestMethod]
        public void TestAllProjects()
        {
            ProjectController controller = new ProjectController();
            string expected = "[{ \"ID\":\"5bb230c5d346df46e89dcb43\",\"Unit\":\"595 SCS\",\"Creator\":\"Gabriel Stines\",\"Name\":\"The CPI Project itself\"},{ \"ID\":\"5bb639f3cdec7e5208aa30cc\",\"Unit\":\"U\",\"Creator\":\"FN LN\",\"Name\":\"PN\"},{ \"ID\":\"5bb63f70cdec7e5208aa30cd\",\"Unit\":\"absolute\",\"Creator\":\"First Last\",\"Name\":\"Namb\"},{ \"ID\":\"5bb640b3a14ab08d9448f181\",\"Unit\":\"5cs\",\"Creator\":\"gab stinz\",\"Name\":\"yahyeet\"}]";

            Task<IEnumerable<Stub>> task = controller.AllProjectsAsync();
            task.Wait();
            IEnumerable<Stub> projectList = task.Result;

            Assert.AreNotEqual(null, projectList.ToString());
            Assert.AreEqual(expected.Replace(" ", ""), projectList.ToJson().Replace(" ", ""));
        }

        [TestMethod]
        public void TestGetProject()
        {
            ProjectController controller = new ProjectController();
            string expected = "{ \"Id\":\"5bb230c5d346df46e89dcb43\",\"Name\":\"The CPI Project itself\",\"MajCom\":\"AFGSC\",\"Base\":\"Barksdale\",\"Creator\":\"Gabriel Stines\",\"Unit\":\"595 SCS\",\"Evaluators\":[\"Travis Menard\",\"Alex Cyriac\"],\"TeamLeads\":[\"Ivan Martinovich\",\"Kaya Garcia\",\"\"],\"Facilitators\":[\"Ebony Crawford\",\"Christopher Majek\",\"\"],\"Mentor\":\"Sean Bean\",\"DataCollection\":{\"Elements\":[{\"Goal\":\"\"\"\",\"Actual\":\"\"\"\",\"Name\":\"1\",\"Type\":\"\",\"VA\":null,\"NVA\":null,\"Labor\":null,\"Material\":null,\"Other\":null,\"Transaction\":null,\"Total\":null}],\"Id\":\"000000000000000000000000\",\"Name\":\"Empty\",\"Type\":\"\"},\"Champion\":{\"Name\":\"\",\"Deficiency\":\"\",\"Expectation\":\"\",\"Recommendation\":\"\",\"Goal\":0,\"Response\":{\"Concur\":\"\"}},\"TeamLeadMeeting\":{\"MembersIdentified\":[],\"SIPOC\":{\"Suppliers\":[],\"Inputs\":[],\"Process\":[],\"Outputs\":[],\"Customers\":[]},\"DateRange\":{\"begin\":\"\",\"end\":\"\"}},\"DraftCharter\":{\"TeamLeadSig\":{},\"ChampSig\":{}},\"RootCauses\":{\"FishboneBranch\":[],\"RootCausesAndCounters\":{}},\"DesiredEffects\":{\"Productivity\":\"\",\"EquipAvail\":\"\",\"Agility\":\"\",\"SafeOps\":\"\",\"Efficiency\":\"\"},\"DateRange\":{\"begin\":\"\",\"end\":\"\"}}";
            string id = "5bb230c5d346df46e89dcb43";

            Task<string> task = controller.GetProjectAsync(id);
            task.Wait();
            string actual = task.Result;

            Assert.IsNotNull(actual);
            Assert.AreNotEqual("", actual);
            Assert.AreEqual(expected.Replace(" ", ""), actual.Replace(" ", ""));
        }
    }
}
