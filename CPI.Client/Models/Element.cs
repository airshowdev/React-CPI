using System;

using MongoDB.Bson.Serialization.Attributes;

using Newtonsoft.Json;

namespace CPI.Client
{
    public class Element
    {
        [JsonProperty("Goal")]
        public string Goal { get; set; } = "";
        [JsonProperty("Actual")]
        public string Actual { get; set; } = "";
        [JsonProperty("Name")]
        public string Name { get; set; } = "";

        [JsonProperty("Type")]
        public string Type { get; set; } = "";

        [JsonIgnore]
        [BsonIgnore]
        public bool GoalMet => CheckGoalMet();

        [JsonProperty("VA")]
        [BsonIgnoreIfNull]
        public int? VA { get; set; } = null;

        [JsonProperty("NVA")]
        [BsonIgnoreIfNull]
        public int? NVA { get; set; } = null;
        [JsonProperty("Labor")]
        [BsonIgnoreIfNull]
        public decimal? Labor { get; set; } = null;
        [JsonProperty("Material")]
        [BsonIgnoreIfNull]
        public decimal? Material { get; set; } = null;
        [JsonProperty("Other")]
        [BsonIgnoreIfNull]
        public decimal? Other { get; set; } = null;

        [JsonProperty("Transaction")]
        [BsonIgnoreIfNull]
        public int? TransNum { get; set; } = null;

        [JsonProperty("Total")]
        [BsonIgnoreIfNull]
        public decimal? TotalCost => Labor + Material + Other;

        [JsonIgnore]
        [BsonIgnore]
        public int NVAPercentage => CalculateNVA();
        [JsonIgnore]
        [BsonIgnore]
        public int VAPercentage => CalculateVA();

        [JsonIgnore]
        [BsonIgnore]
        public int OnTimeVariance => CalculateOnTimeVariance();

        [JsonIgnore]
        [BsonIgnore]
        public decimal TotalCostVariance => CalculateTotalCostVariance();

        [JsonIgnore]
        [BsonIgnore]
        public decimal CPTVariance => CalculateCPTVariance();

        [JsonIgnore]
        [BsonIgnore]
        public decimal SavingVariance => CalculateSavingsVariance();

        public bool CheckGoalMet()
        {
            try
            {
                switch (Type)
                {
                    case "CPT":
                        return CPTVariance < Convert.ToDecimal(Goal);
                    case "OnTime":
                        return OnTimeVariance < Convert.ToDecimal(Goal);
                    case "TotalCost":
                        return TotalCostVariance < Convert.ToDecimal(Goal);
                    case "Savings":
                        return SavingVariance < Convert.ToDecimal(Goal);
                    case "NVA":
                        return NVAGoalMet();
                    case "VA":
                        return VAGoalMet();
                    default:
                        return false;

                }
            }
            catch (FormatException formatEx)
            {
                Log4NetLogger.Error(formatEx.ToString());
            }
            catch (OverflowException overflowEx)
            {
                Log4NetLogger.Error(overflowEx.ToString());
            }
            return false;
        }

        private bool NVAGoalMet()
        {
            try
            {
                decimal percentage = Convert.ToDecimal(NVAPercentage);

                return percentage < Convert.ToDecimal(Goal);
            }

            catch (FormatException formatEx)
            {
                Log4NetLogger.Error(formatEx.ToString());
            }
            catch (OverflowException overflowEx)
            {
                Log4NetLogger.Error(overflowEx.ToString());
            }
            return false;
        }

        private bool VAGoalMet()
        {
            try
            {
                decimal percentage = Convert.ToDecimal(VAPercentage);

                return percentage > Convert.ToDecimal(Goal);
            }

            catch (FormatException formatEx)
            {
                Log4NetLogger.Error(formatEx.ToString());
            }
            catch (OverflowException overflowEx)
            {
                Log4NetLogger.Error(overflowEx.ToString());
            }
            return false;
        }

        private int CalculateNVA()
        {
            try
            {
                decimal nva = Convert.ToDecimal(NVA);
                decimal va = Convert.ToDecimal(VA);

                decimal percentage = nva / (va + nva);

                return Convert.ToInt32(Math.Round(percentage));

            }
            catch (FormatException f)
            {
                Log4NetLogger.Error(f.ToString());
                throw;
            }
            catch (OverflowException O)
            {
                Log4NetLogger.Error(O.ToString());
                throw;
            }

        }
        private int CalculateVA()
        {
            try
            {
                decimal nva = Convert.ToDecimal(NVA);
                decimal va = Convert.ToDecimal(VA);

                decimal percentage = va / (va + nva);

                return Convert.ToInt32(Math.Round(percentage));

            }
            catch (FormatException f)
            {
                Log4NetLogger.Error(f.ToString());
                throw;
            }
            catch (OverflowException O)
            {
                Log4NetLogger.Error(O.ToString());
                throw;
            }
        }

        private int CalculateOnTimeVariance()
        {
            try
            {
                DateTime actual = Convert.ToDateTime(Actual);
                DateTime goal = Convert.ToDateTime(Goal);

                return (int)(goal - actual).TotalDays;
            }
            catch (FormatException f)
            {
                Log4NetLogger.Error(f.ToString());
                throw;
            }
            catch (OverflowException O)
            {
                Log4NetLogger.Error(O.ToString());
                throw;
            }
        }

        private decimal CalculateTotalCostVariance()
        {
            try
            {
                decimal goal = Convert.ToDecimal(Goal);
                decimal total = Convert.ToDecimal(TotalCost);
                return total - goal;
            }
            catch (FormatException f)
            {
                Log4NetLogger.Error(f.ToString());
                throw;
            }
            catch (OverflowException O)
            {
                Log4NetLogger.Error(O.ToString());
                throw;
            }


        }

        private decimal CalculateCPTVariance()
        {
            try
            {
                int actual = Convert.ToInt32(Actual);
                int transNum = Convert.ToInt32(TransNum);

                decimal variance = actual / transNum;

                int goal = Convert.ToInt32(Goal);

                return variance / goal;
            }
            catch (FormatException f)
            {
                Log4NetLogger.Error(f.ToString());
                throw;
            }
            catch (OverflowException O)
            {
                Log4NetLogger.Error(O.ToString());
                throw;
            }

        }

        private decimal CalculateSavingsVariance()
        {
            try
            {
                return (Convert.ToDecimal(Actual) - Convert.ToDecimal(Goal));
            }
            catch (FormatException f)
            {
                Log4NetLogger.Error(f.ToString());
                throw;
            }
            catch (OverflowException O)
            {
                Log4NetLogger.Error(O.ToString());
                throw;
            }
        }
    }
}