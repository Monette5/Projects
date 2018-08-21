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

namespace AccessLoginApp
{
    public partial class Form2 : Form
    {
        private OleDbConnection connection = new OleDbConnection();
        private Form1 _f1;
        public Form2(Form1 f1_)
        {
            
            InitializeComponent();
            this._f1 = f1_;
            label1.Text ="Hi " + this._f1.Name +"How are you today?";
            //label1.Text = keyName;
            connection.ConnectionString =
        @"Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\Applications\QuoteWerks52\SystemSettings.mdb;
Persist Security Info=False;";
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void btn_save_Click(object sender, EventArgs e)
        {
            try
            {
            connection.Open();
            OleDbCommand command = new OleDbCommand();
            command.Connection = connection;
            command.CommandText = "insert into SystemSettings (SectionName, KeyName, KeyValue) values('" + sectname_txt.Text + "','" + keyname_txt.Text + "','" + valname_txt.Text + "')";

            command.ExecuteNonQuery();
                MessageBox.Show("data saved");
                connection.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error " + ex);
            }
        }

        private void btn_edit_Click(object sender, EventArgs e)
        {
            try
            {
                connection.Open();
                OleDbCommand command = new OleDbCommand();
                command.Connection = connection;
                string query = "update SystemSettings set SectionName='" + sectname_txt.Text + "',KeyName='" +
                               keyname_txt.Text + "',KeyValue='" + valname_txt.Text + "'";
                MessageBox.Show(query);
                command.CommandText = query;

                command.ExecuteNonQuery();
                MessageBox.Show("data edit successful");
                connection.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error " + ex);
            }
        }

        private void btn_delete_Click(object sender, EventArgs e)
        {
            try
            {
                connection.Open();
                OleDbCommand command = new OleDbCommand();
                command.Connection = connection;
                command.CommandText = "delete from SystemSettings where SectionName= '"+ sectname_txt.Text + "'";

                command.ExecuteNonQuery();
                MessageBox.Show("data deleted");
                connection.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error " + ex);
            }
        }

        private void Form2_Load(object sender, EventArgs e)
        {

            try
            {
                connection.Open();
                OleDbCommand command = new OleDbCommand();
                command.Connection = connection;
                command.CommandText = "select * from SystemSettings";

                OleDbDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    comboBox1.Items.Add(reader["KeyName"].ToString());
                    listBox1.Items.Add(reader["KeyName"].ToString());
                }
                connection.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error " + ex);
            }
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

            try
            {
                connection.Open();
                OleDbCommand command = new OleDbCommand();
                command.Connection = connection;
                command.CommandText = "select * from SystemSettings where KeyName='" +comboBox1.Text +"'";

                OleDbDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    sectname_txt.Text = reader["SectionName"].ToString();
                        keyname_txt.Text = reader["KeyName"].ToString();
                    valname_txt.Text = reader["KeyValue"].ToString();
                }
                connection.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error " + ex);
            }
        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {
                connection.Open();
                OleDbCommand command = new OleDbCommand();
                command.Connection = connection;
                command.CommandText = "select * from SystemSettings where KeyName='" + listBox1.Text + "'";

                OleDbDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    sectname_txt.Text = reader["SectionName"].ToString();
                    keyname_txt.Text = reader["KeyName"].ToString();
                    valname_txt.Text = reader["KeyValue"].ToString();
                }
                connection.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error " + ex);
            }
        }

        private void btn_loadtable_Click(object sender, EventArgs e)
        {
            try
            {
                connection.Open();
                OleDbCommand command = new OleDbCommand();
                command.Connection = connection;
                string query = "select * from SystemSettings";
                
                command.CommandText = query;
                OleDbDataAdapter da = new OleDbDataAdapter(command);
                DataTable dt = new DataTable();
                da.Fill(dt);
                dataGridView1.DataSource = dt;
                connection.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error " + ex);
            }
        }

        private void chart1_Click(object sender, EventArgs e)
        {

        }

        private void btn_chart_Click(object sender, EventArgs e)
        {
            try
            {
                connection.Open();
                OleDbCommand command = new OleDbCommand();
                command.Connection = connection;
                string query = "select * from SystemSettings";
                command.CommandText = query;
                OleDbDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    chart1.Series["Value"].Points.AddXY(reader["KeyName"].ToString(), reader["KeyValue"].ToString());
                }
                connection.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error " + ex);
            }
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            //if (e.RowIndex>=0)
            //{
            //    DataGridViewRow row = dataGridView1.Rows[e.RowIndex];
            //    sectname_txt.Text = row.Cells[1].Value.ToString();
            //    keyname_txt.Text = row.Cells[2].Value.ToString();
            //    valname_txt.Text = row.Cells[3].Value.ToString();
            //}
        }

        private void dataGridView1_SelectionChanged(object sender, EventArgs e)
        {

            DataGridViewCell cell = null;
            foreach(DataGridViewCell selectedCell in dataGridView1.SelectedCells)
            {
                cell = selectedCell;
                break;
            }
            if (cell != null)
            {
                DataGridViewRow row = cell.OwningRow;
                sectname_txt.Text = row.Cells[1].Value.ToString();
                keyname_txt.Text = row.Cells[2].Value.ToString();
                valname_txt.Text = row.Cells[3].Value.ToString();
            }

        }
    }
}
