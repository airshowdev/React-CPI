using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CPI.Client.Models;

namespace CPI.Client.Models.DataPages
{
    public class CostAdvoidance : ITemplate<CostAvoidanceElement>
    {
        public Dictionary<string, CostAvoidanceElement> Elements { get; set; }

        public float CalculateAverage()
        {
            throw new NotImplementedException();
        }

        public int CalculatePercentage()
        {
            throw new NotImplementedException();
        }

        public float CalculateTotal()
        {
            float total = 0;
            
            foreach (string key in Elements.Keys)
            {
                total += (float)Elements[key].Actual;
            }

            return total;

        }
    }
}
