using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;


// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
// [System.Web.Script.Services.ScriptService]

[System.Web.Services.WebService(
   Namespace = "http://Walkthrough/XmlWebServices/",
   Description = "A temperature conversion service.")]
public class Service : System.Web.Services.WebService
{
    public Service () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }
    [WebMethod(Description = "This method converts a temperature in " +
       "degrees Fahrenheit to a temperature in degrees Celsius.")]
    public double ConvertTemperature(double dFahrenheit)
    {
        return ((dFahrenheit - 32) * 5) / 9;
    }
    [WebMethod]
    public string HelloWorld() {
        return "Hello World";
    }
    
}