using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.OleDb;
using System.Reflection;
using System.Security.Cryptography.X509Certificates;

namespace AccessLoginApp
{
    public partial class Form1 : Form
    {
        public string Name {get; private set   ;  }
        private OleDbConnection connection = new OleDbConnection();
        public Form1()
        {
            
              
            InitializeComponent();
            connection.ConnectionString =
                    @"Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\Applications\QuoteWerks52\SystemSettings.mdb;
Persist Security Info=False;";
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            try
            {
                connection.Open();
                checkConnection.Text = "Connection Successful";
                connection.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error " + ex);
            }
        }

        private void btn_Login_Click(object sender, EventArgs e)
        {
            connection.Open();
            OleDbCommand command = new OleDbCommand();
            command.Connection = connection;
            command.CommandText = "select * from SystemSettings where keyName='"+txt_name.Text+"' and keyValue='"+txt_data.Text+"'";
            OleDbDataReader reader= command.ExecuteReader();
            int count = 0;
            while (reader.Read())
            {
                count = count + 1;
            }
            if (count == 1)
            {
                MessageBox.Show("key name and value are correct");
                Name = txt_name.Text;
                connection.Close();
                connection.Dispose();
                this.Hide();
                Form2 f2 = new Form2(this);
                f2.ShowDialog();
            }
            else if (count > 1)
            {
                MessageBox.Show("key name and value are duplicated");
            }
            else
            {
                MessageBox.Show("key name and value are incorrect");
            }
            connection.Close();
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}
