using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPI.Client.Models
{
    public class NVAElement : IElement
    {
       public float NVA { get; set; }
       public float VA { get; set; }
       public float Goal { get; set; }
        public string Name { get; set; }

        public float Percentage { get; set; }
    }
}
