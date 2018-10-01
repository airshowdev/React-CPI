using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPI.Client.Models
{
    public class CPTElement : IElement
    {
        public string Name { get; set; }

        public float TotalCost { get; set; }

        public int TransactionNum { get; set; }
    }
}
