using System;

namespace CPI.Client.Models
{
    public class OnTimeElement : IElement
    {
        public object Actual { get => actual; set { actual = (DateTime)value; }  }

        private DateTime actual { get; set; }
        public object Goal { get => goal; set { goal = (DateTime)value; } }
        private DateTime goal { get; set; }

        public bool GoalMet => actual <= goal;

        public string Name { get; set; }
    }
}
