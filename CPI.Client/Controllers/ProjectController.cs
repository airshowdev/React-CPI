using CpiApi.Etc;
using CpiApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using static CpiApi.Program;

namespace CpiApi
{
    public class ProjectsApiController : Controller
    {
        /// <summary>
        /// Add a new project to the database
        /// </summary>

        /// <param name="body">Project object that needs to be added to the database</param>
        /// <response code="200">Successful operation</response>
        /// <response code="400">Bad format</response>
        [HttpPost]
        [Route("/v1/projects")]
        [ValidateModelState]
        public virtual IActionResult AddProject([FromBody]Project body)
        {
            //TODO: Validate input
            // return StatusCode(400);
            Projects.InsertOne(body);

            return StatusCode(StatusCodes.Status200OK, body.ID);
        }

        /// <summary>
        /// Delete an existing Project
        /// </summary>

        /// <param name="projectId">ID of project to be deleted</param>
        /// <response code="404">Project not found</response>
        [HttpDelete]
        [Route("/v1/projects/{projectId}")]
        [ValidateModelState]
        public virtual IActionResult DeleteProject([FromRoute][Required]string projectId)
        {
            //TODO: Check if project exists
            // return StatusCode(404);

            Projects.DeleteOne(x => x.ID == projectId);

            return StatusCode(StatusCodes.Status200OK);
        }

        /// <summary>
        /// Get a project by Id from the database
        /// </summary>

        /// <param name="projectId">ID of project that needs to be fetched</param>
        /// <response code="200">Successful operation</response>
        [HttpGet]
        [Route("/v1/projects/{projectId}")]
        [ValidateModelState]
        public virtual IActionResult GetProject([FromRoute][Required]string projectId)
        {
            return StatusCode(StatusCodes.Status200OK, Projects.Find(x => x.id == new ObjectId(projectId)).First());
        }

        /// <summary>
        /// Get all projects from the database
        /// </summary>

        /// <response code="200">Successful operation</response>
        [HttpGet]
        [Route("/v1/projects")]
        [ValidateModelState]
        public virtual IActionResult GetProjects()
        {
            var allProjects = Projects.Find(_ => true).ToList();

            return StatusCode(StatusCodes.Status200OK, allProjects.Select(x => x.ToStub()));
        }

        /// <summary>
        /// Modify an existing Project
        /// </summary>

        /// <param name="body">Project object to be modify with</param>
        /// <param name="projectId">ID of project to be modified</param>
        /// <response code="400">Bad ID or body format</response>
        /// <response code="404">Project not found</response>
        /// <response code="405">Validation exception</response>
        [HttpPatch]
        [Route("/v1/projects/{projectId}")]
        [ValidateModelState]
        public virtual IActionResult ModifyProject([FromBody]Project body, [FromRoute][Required]string projectId)
        {
            //TODO: Handle for Bad ID
            //TODO: Handle for project not found
            //TODO: Validate body

            var source = Projects.Find(x => x.id == new ObjectId(projectId)).First();

            source.MergeValues(body);

            source.id = new ObjectId(projectId);

            Projects.ReplaceOne(x => x.id == new ObjectId(projectId), source);

            return StatusCode(StatusCodes.Status200OK);
        }

        /// <summary>
        /// Replace an existing Project
        /// </summary>

        /// <param name="body">Project object that to replace with</param>
        /// <param name="projectId">ID of project to be replaced</param>
        /// <response code="400">Bad ID or body format</response>
        /// <response code="404">Project not found</response>
        /// <response code="405">Validation exception</response>
        [HttpPut]
        [Route("/v1/projects/{projectId}")]
        [ValidateModelState]
        public virtual IActionResult ReplaceProject([FromBody]Project body, [FromRoute][Required]string projectId)
        {
            //TODO: Handle for Bad ID
            //TODO: Handle for project not found
            //TODO: Validate body

            Projects.ReplaceOne(x => x.id == new ObjectId(projectId), body);

            return StatusCode(StatusCodes.Status200OK);
        }
    }
}