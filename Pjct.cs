using System;
using System.Collections.Generic;
using System.Web.Script.Serialization; 

    public class Pjct
    {
    string json = @"{
   'Item': 'Intel',
   'POC': '500W',
   'Dates': 'Oct 1, 2018',
    'Status': 'Ongoing'
}";
    string parsedJson;
    string Item;
    string POC;
    string Dates;
    string Status;

    //public Pjct(string JsonRow)
    //    {
    //        string Item;
    //        string POC;
    //        string Dates;
    //        string Status;
    //    }

        //public string TableRow(string dBJsonString)
        //{
        //    var ser = new JavaScriptSerializer();
        //    ser.Deserialize <
    
        //}

    public List ReadJson()
    {
        if (json != "" && json != null)
        {
            using (Streamreader r = new Streamreader(json))
            {
                parsedJson = r.ReadToEnd();


            return List<Pjct> values = JsonConvert.DeserializeObject<List<Pjct>>(parsedJson);
            }
        }
    }
    }

