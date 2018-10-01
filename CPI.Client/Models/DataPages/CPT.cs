using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CPI.Client.Models;

namespace CPI.Client.Models.DataPages
{
    public class CPT : ITemplate<CPTElement>
    {
        public Dictionary<string, CPTElement> Elements { get; set; }

        public float Goal { get; set; }

        public float CalculateAverage()
        {
            throw new NotImplementedException();
        }

        public float CaluclateObjectDelta(string Name)
        {
            float average = Elements[Name].TotalCost / Elements[Name].TransactionNum;

            return average / Goal;
        }

        public int CalculatePercentage()
        {
            float total = 0;
            foreach (string key in Elements.Keys)
            {
                total += Elements[key].TotalCost;
            }

            float average = total / Elements.Count;
            return Convert.ToInt32(Math.Round(average/Goal));
        }
    }
}
