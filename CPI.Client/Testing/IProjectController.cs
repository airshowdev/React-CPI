using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using CPI.Client.Models;

namespace CPI.Client.Testing
{
    public interface IProjectController
    {

        Task<IEnumerable<Stub>> AllProjectsAsync();
    }
}
