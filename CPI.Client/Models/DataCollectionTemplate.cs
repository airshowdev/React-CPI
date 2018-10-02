using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPI.Client.Models
{
    public abstract class DataCollectionTemplate
    {
        IList<DataCollectionItem> Items { get; set; }
        float DataSetVariance()
        {
            //Calculate the variance for the whole dataset
            return 0;
        }
    }

    public abstract class DataCollectionItem
    {
        string Name { get; set; }
        float GoodStuff { get; set; }
        float BadStuff { get; set; }

        float objectVariance()
        {
            //Calculate the variance per object
            return 0;
        }
    }
}
