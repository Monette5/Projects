using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml;

namespace zoho
{
    public partial class Form1 : Form
    {
        XmlReader xmlFile =
                XmlReader.Create(
                    "https://crm.zoho.com/crm/private/xml/Leads/getMyRecords?authtoken=3d21f5f2032137bfe8ce43265c31a9da" +
                    "&scope=crmapi&selectColumns=Leads(Company,First Name,Last Name, Phone, Website)",new XmlReaderSettings());



        public Form1()
        {
            InitializeComponent();
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            
            

        }

        private void ReadXmlButton_Click(object sender, EventArgs e)
        {
            //DataTable dt = new DataTable();
            ZohoDataSet.ReadXml(xmlFile);

            dataGridView1.DataSource = ZohoDataSet;
            dataGridView1.DataMember = "FL";

            //foreach (DataGridViewRow row in dataGridView1.Rows)
            //{
            //    DataRow row1 = dt.NewRow();

            //    for (int i = 0; i < dataGridView1.ColumnCount; i++)

            //        if value exists add that value else add Null for that field


            //        row1[i] = (row.Cells[i].Value == null ? DBNull.Value : row.Cells[i].Value);

            //    dt.Rows.Add(row1);
            //}

            //dataGridView1.DataSource = dataSet.Tables[col].DefaultView;
            //DataTable dt = new DataTable();

            //foreach (DataGridViewColumn col in dataGridView1.Columns)
            //{

            //    ZohoDataSet.ReadXml(xmlFile);
            //    dt.Columns.Add(col.DataPropertyName, col.ValueType);
            //    dataGridView1.DataSource = ZohoDataSet.Tables[i].DefaultView;
            //}
            //foreach (DataGridViewRow row in dataGridView1.Rows)
            //{
            //    DataRow row1 = dt.NewRow();

            //    for (int i = 0; i < dataGridView1.ColumnCount; i++)

            //        if value exists add that value else add Null for that field

            //        row1[i] = (row.Cells[i].Value == null ? DBNull.Value : row.Cells[i].Value);

            //    dt.Rows.Add(row1);

            //}
            //Copying from datatable to dataset




            //ZohoDataSet.ReadXml(xmlFile);
        }

        private void ShowSchemaButton_Click(object sender, EventArgs e)
        {
            System.IO.StringWriter swXML = new System.IO.StringWriter();
            ZohoDataSet.WriteXmlSchema(swXML);
            textBox1.Text = swXML.ToString();

        }

        private void Form1_Load(object sender, EventArgs e)
        {
            
            //DataSet ZohoDataSet = new DataSet();
            //dataGridView1.DataSource = ZohoDataSet;
            //ZohoDataSet.ReadXml(xmlFile);
            //dataGridView1.DataMember = "Leads";
        }

        private void button1_Click(object sender, EventArgs e)
        {
            DataTable dt = new DataTable();
            ZohoDataSet.Tables.Add(dt);

            //writing new values to XML

            ZohoDataSet.WriteXml("C:\\Users\\Monette\\Documents\\File.xml");

            MessageBox.Show("Successfully added ", "Success");

            this.Close();
        }

      
    }
}
    

