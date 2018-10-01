using System;
using System.Collections.Generic;

public interface ITemplate<T>
{
     Dictionary<string, T> Elements { get; set; }

     float CalculateAverage();

     int CalculatePercentage();
}
