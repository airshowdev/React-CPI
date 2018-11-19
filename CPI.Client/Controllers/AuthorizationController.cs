using CpiApi.Etc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CpiApi.Controllers
{
    [SslClientCertActionFilter]
    public class AuthorizationApiController : Controller
    {
        [HttpGet]
        [Route("/v1/auth/echo")]
        [ValidateModelState]
        public virtual IActionResult Echo()
        {
            return StatusCode(StatusCodes.Status200OK, HttpContext.Connection.ClientCertificate.ToString());
        }
    }
}
