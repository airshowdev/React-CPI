using CpiApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using MongoDB.Bson;
using MongoDB.Driver;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.RegularExpressions;

using static CpiApi.Program;

namespace CpiApi.Etc
{
    public static class Helpers
    {
        public static void MergeValues<T>(this T target, T source)
        {
            Type t = typeof(T);

            IEnumerable<System.Reflection.PropertyInfo> properties = t.GetProperties().Where(prop => prop.CanRead && prop.CanWrite);

            foreach (System.Reflection.PropertyInfo prop in properties)
            {
                object value = prop.GetValue(source, null);
                if (value != null)
                {
                    prop.SetValue(target, value, null);
                }
            }
        }

        //public static string Display<T>(this IList<T> list, char splitCharacter = )
        //{
        //    StringBuilder sb = new StringBuilder();
        //    foreach (T t in list)
        //    {
        //        sb.Append(t.ToString());
        //        sb.Append(splitCharacter);
        //    }

        //    return sb.ToString();
        //}

        public static T FromJson<T>(string json)
        {
            return JsonConvert.DeserializeObject<T>(json);
        }
    }

    public class SslClientCertActionFilterAttribute : ActionFilterAttribute
    {

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!AuthorizeRequest(context.HttpContext.Connection))
            {
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.Forbidden;
            }
        }

        private bool AuthorizeRequest(ConnectionInfo ctx)
        {

            var clientCertificate = ctx.ClientCertificate;

            int? id = GetId(clientCertificate);

            if (id == null)
            {
                return false;
            }
            string name = GetName(clientCertificate);

            IMongoCollection<User> users = DB.GetCollection<User>("Users");
            IList<int> ids = users.Find(_ => true).ToList().Select(x => x.Id).ToList();

            if (ids.Count == 0 || !ids.Contains((int)id))
            {
                User user = new User()
                {
                    Id = (int)id,
                    Name = name
                };
                users.InsertOne(user);
            }

            return true;
            //return ids.Count > 0 ? ids.Contains(new ObjectId(id)) : false;
        }

        public int? GetId(X509Certificate2 cert)
        {
            string cn = cert.SubjectName.Name.Split(',')[0];

            if (!int.TryParse(cn.Substring(cn.LastIndexOf('.') + 1), out var id))
                return null;

            return id;

        }

        public string GetName(X509Certificate2 cert)
        {
            string cn = cert.SubjectName.Name.Split(',')[0]; // CN=EDMISTEN.DALTON.JAMES.12345678
            string uName = cn.Substring(3, cn.LastIndexOf('.') - 3);
            var parts = uName.Split('.');

            return $"{parts[1]} {parts[2]} {parts[0]}";
        }
    }
}