using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using CPI.Client.Models;
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

        Task<HttpResponse> UpdateProject();
        Task<HttpResponse> UpdateDraftCharter();
        Task<HttpResponse> UpdateTeamLeadMeet();
        Task<HttpResponse> UpdateChampMeet();
        Task<HttpResponse> UpdateDataCollection();
        Task<HttpResponse> DeleteProject(string id);
    }
}
