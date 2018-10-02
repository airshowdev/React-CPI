using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPI.Client.Models
{
    public class TotalCostElement : IElement
    {
        public string Name { get; set; }

        public float MaterialCost { get; set; }

        public float LaborCost { get; set; }

        public float OtherCost { get; set; }

        public float TotalCost => MaterialCost + LaborCost + OtherCost;
    }
}
