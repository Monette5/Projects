using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Net;
using System.IO;
using System.Web;
using System.Text;
using System.Net.Security;
using zoho;

namespace zohotest
{
    static class Program
    {
        public static string zohocrmurl = "https://crm.zoho.com/crm/private/xml/";

        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            string result = APIMethod("Leads", "getRecords"); //Change the id,method name, and module name here
            Console.Write(result);
            DataSet ZohoDataSet = new DataSet();

            ZohoDataSet.WriteXml("C:\\Users\\Monette\\Documents\\File.xml");
            
            // ZohoDataSet.ReadXml(result);
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());


        }

        public static String APIMethod(string modulename, string methodname)
        {
            string uri = zohocrmurl + modulename + "/" + methodname + "?";
            /* Append parameters here */
            string postContent = "scope=crmapi&selectColumns=Leads(First Name,Last Name,Email,Company)";
            postContent = postContent + "&authtoken=c9f1f4666818af0fa1d76f7ed9deda09"; //Give authtoken
            //if (methodname.Equals("insertRecords") || methodname.Equals("updateRecords"))
            //{
            //    postContent = postContent + "&xmlData=" + HttpUtility.UrlEncode("monette.gordong@quintadena.com");
            //}
            //if (methodname.Equals("updateRecords") || methodname.Equals("deleteRecords") || methodname.Equals("getRecordById"))
            //{
            //    postContent = postContent + "&id=" + recordId;
            //}
            string result = AccessCRM(uri, postContent);
            return result;
        }

        public static string AccessCRM(string url, string postcontent)
        {
            WebRequest request = WebRequest.Create(url);
            request.Method = "POST";
            byte[] byteArray = Encoding.UTF8.GetBytes(postcontent);
            request.ContentType = "application/x-www-form-urlencoded";
            request.ContentLength = byteArray.Length;
            Stream dataStream = request.GetRequestStream();
            dataStream.Write(byteArray, 0, byteArray.Length);
            dataStream.Close();
            WebResponse response = request.GetResponse();
            dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);
            string responseFromServer = reader.ReadToEnd();
            reader.Close();
            dataStream.Close();
            response.Close();
            return responseFromServer;
        }
    }
}

