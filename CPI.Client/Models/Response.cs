using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPI.Client
{
    public class Response
    {

        public string Status { get; set; }

        public string Body { get; set; }

        public Exception InternalException { get; set; }


    }
}
