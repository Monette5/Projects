using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml;

namespace WindowsFormsApplication1
{
    public partial class Form1 : System.Windows.Forms.Form
    {
        private static void DemonstrateReadWriteXMLDocumentWithString()
        {
            DataTable table = CreateTestTable("XmlDemo");
            PrintValues(table, "Original table");

            string fileName = "C:\\Users\\Monette\\Documents\\File.xml";
            table.WriteXml(fileName, XmlWriteMode.WriteSchema);

            DataTable newTable = new DataTable();
            newTable.ReadXml(fileName);

            // Print out values in the table.
            PrintValues(newTable, "New table");
        }

        private static DataTable CreateTestTable(string tableName)
        {
            // Create a test DataTable with two columns and a few rows.
            DataTable table = new DataTable(tableName);
            DataColumn column = new DataColumn("FL", typeof(System.String));
            column.AutoIncrement = true;
            table.Columns.Add(column);

            column = new DataColumn("Company", typeof(System.String));
            table.Columns.Add(column);

            // Add ten rows.
            DataRow row;
            for (int i = 0; i <= 9; i++)
            {
                row = table.NewRow();
                row["Company"] = "Company " + i;
                table.Rows.Add(row);
            }

            table.AcceptChanges();
            return table;
        }

        private static void PrintValues(DataTable table, string label)
        {
            Console.WriteLine(label);
            foreach (DataRow row in table.Rows)
            {
                foreach (DataColumn column in table.Columns)
                {
                    Console.Write("\t{0}", row[column]);
                }
                Console.WriteLine();
            }
        }

        // Initialize the form.
        private void Form1_Load(object sender, EventArgs e)
        {
            InitializeComponent();
            dataGridView1.DataSource = CreateTestTable("zoho");
            dataGridView1.DataMember = "Leads";
        }

        private void dataGridView1_CellContentClick_1(object sender, DataGridViewCellEventArgs e)
        {
          
        }

        //private DataGridView dataGridView1 = new DataGridView();
        // private BindingSource bindingSource1 = new BindingSource();
        // private SqlDataAdapter dataAdapter = new SqlDataAdapter();
        // private Button reloadButton = new Button();
        // private Button submitButton = new Button();
        // XmlReader xmlFile =
        // XmlReader.Create(
        //     "https://crm.zoho.com/crm/private/xml/Leads/getMyRecords?authtoken=3d21f5f2032137bfe8ce43265c31a9da&scope=crmapi",
        //     new XmlReaderSettings());
        // [STAThreadAttribute()]
        // public static void Main()
        // {
        //     Application.Run(new Form1());
        // }
        // // Initialize the form.
        // public Form1()
        // {
        //     dataGridView1.Dock = DockStyle.Fill;

        //     reloadButton.Text = "reload";
        //     submitButton.Text = "submit";
        //     reloadButton.Click += new System.EventHandler(reloadButton_Click);
        //     submitButton.Click += new System.EventHandler(submitButton_Click);

        //     FlowLayoutPanel panel = new FlowLayoutPanel();
        //     panel.Dock = DockStyle.Top;
        //     panel.AutoSize = true;
        //     panel.Controls.AddRange(new Control[] { reloadButton, submitButton });

        //     this.Controls.AddRange(new Control[] { dataGridView1, panel });
        //     this.Load += new System.EventHandler(Form1_Load);
        //     this.Text = "DataGridView databinding and updating demo";
        // }

        // // Initialize the form.
        // private void Form1_Load(object sender, EventArgs e)
        // {
        //     // Bind the DataGridView to the BindingSource
        //     // and load the data from the database.
        //     dataGridView1.DataSource = bindingSource1;
        //     GetData("select * from Leads");
        //     //string connectionString = "https://crm.zoho.com/crm/private/xml/";
        //     //string result = APIMethod("Leads", "getRecords");
        //     //SqlConnection connection = new SqlConnection(connectionString);
        //     //SqlDataAdapter dataadapter = new SqlDataAdapter(sql, connection);
        //     //DataSet ds = new DataSet();
        //     //ds.ReadXml(xmlFile);

        //     //dataGridView1.DataSource = ds;
        //     //dataGridView1.DataMember = "FL";
        //     //connection.Open();
        //     //dataadapter.Fill(ds, "Authors_table");
        //     //connection.Close();
        //     //dataGridView1.DataSource = ds;
        //     //dataGridView1.DataMember = "Authors_table";
        // }
        // private void reloadButton_Click(object sender, System.EventArgs e)
        // {
        //     // Reload the data from the database.
        //     GetData(dataAdapter.SelectCommand.CommandText);
        // }

        // private void submitButton_Click(object sender, System.EventArgs e)
        // {
        //     // Update the database with the user's changes.
        //     dataAdapter.Update((DataTable)bindingSource1.DataSource);
        // }
        // private void GetData(string selectCommand)
        // {
        //     try
        //     {
        //         // Specify a connection string. Replace the given value with a 
        //         // valid connection string for a Northwind SQL Server sample
        //         // database accessible to your system.
        //         String connectionString =
        //             "https://crm.zoho.com/crm/private/xml/Leads/getMyRecords?authtoken=3d21f5f2032137bfe8ce43265c31a9da&scope=crmapi";

        //         // Create a new data adapter based on the specified query.
        //         dataAdapter = new SqlDataAdapter(selectCommand, connectionString);

        //         // Create a command builder to generate SQL update, insert, and
        //         // delete commands based on selectCommand. These are used to
        //         // update the database.
        //         SqlCommandBuilder commandBuilder = new SqlCommandBuilder(dataAdapter);

        //         // Populate a new data table and bind it to the BindingSource.
        //         DataTable table = new DataTable();
        //         table.Locale = System.Globalization.CultureInfo.InvariantCulture;
        //         dataAdapter.Fill(table);

        //         bindingSource1.DataSource = table;

        //         // Resize the DataGridView columns to fit the newly loaded content.
        //         dataGridView1.AutoResizeColumns(
        //             DataGridViewAutoSizeColumnsMode.AllCellsExceptHeader);
        //     }
        //     catch (SqlException)
        //     {
        //         MessageBox.Show(@"Not found");
        //     }
        // }


    }
}
