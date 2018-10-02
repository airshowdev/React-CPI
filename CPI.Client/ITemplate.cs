using System;
using System.Collections.Generic;
using CPI.Client;

public interface ITemplate<IElement>
{
     Dictionary<string, IElement> Elements { get; set; }

     float CalculateAverage();

     int CalculatePercentage();
}
