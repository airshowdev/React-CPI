using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CPI.Client.Models;

namespace CPI.Client.Models.DataPages
{
    public class TotalCost : ITemplate<TotalCostElement>
    {
        public Dictionary<string, TotalCostElement> Elements { get; set; }

        public float CalculateAverage()
        {
            throw new NotImplementedException();
        }

        public int CalculatePercentage()
        {
            throw new NotImplementedException();
        }
    }
}
