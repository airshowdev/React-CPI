using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPI.Client.Models.DataPages
{
    public class EmptyTemplate : ITemplate<IElement>
    {
        public Dictionary<string, IElement> Elements { get; set; } = new Dictionary<string, IElement>();

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
