using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPI.Client.Models
{
    public class CostAvoidanceElement : IElement
    {
        public object Goal { get => goal; set { goal = (float) value; } }
        private float goal { get; set; }

        public object Actual { get => Total; set { Total = (float) value; } }
        private float Total { get; set; }
        public string Name { get; set; }

    }
}
