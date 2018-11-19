using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CpiApi;
using CpiApi.Models;
using Microsoft.AspNetCore.Http;

namespace CPI.Client.Testing
{
    public interface IProjectController
    {

        Task<IEnumerable<Stub>> AllProjectsAsync();

        Task<Project> GetProjectAsync(string id);

        Task<object> DataCollection(string id);
        Task<object> ChampMeet(string id);
        Task<object> TeamLeadMeet(string id);
        Task<object> CausesAndCounters(string id);
        Task<object> DraftCharter(string id);

        Task<Response> UpdateProject();
        Task<Response> UpdateDraftCharter();
        Task<Response> UpdateTeamLeadMeet();
        Task<Response> UpdateChampMeet();
        Task<Response> UpdateDataCollection();
        Task<Response> DeleteProject(string id);
    }
}
