using System;
using System.Drawing;
using System.Windows.Forms;
using System.Data;
using System.IO;
using System.Xml;

namespace BarGraph
{

	public class BarGraphForm : Form
	{

		//private DataSet ds;
		//private DataGrid grid;
		//private Button btn;

		
		//public BarGraphForm() {

		//	//InitializeComponent();

		//	ds = new DataSet();
		//	ds.ReadXmlSchema("c:\\users\\monette\\documents\\visual studio 2015\\Projects\\WindowsFormsApplication1\\WindowsFormsApplication1\\BarGraph.xsd");

		//	grid.SetDataBinding(ds,"Bar");
			
		//	}


		//private void InitializeComponent()
		//{
  //          this.grid = new System.Windows.Forms.DataGrid();
  //          this.btn = new System.Windows.Forms.Button();
  //          ((System.ComponentModel.ISupportInitialize)(this.grid)).BeginInit();
  //          this.SuspendLayout();
  //          // 
  //          // grid
  //          // 
  //          this.grid.DataMember = "";
  //          this.grid.HeaderForeColor = System.Drawing.SystemColors.ControlText;
  //          this.grid.Location = new System.Drawing.Point(5, 5);
  //          this.grid.Name = "grid";
  //          this.grid.Size = new System.Drawing.Size(200, 115);
  //          this.grid.TabIndex = 0;
  //          // 
  //          // btn
  //          // 
  //          this.btn.Location = new System.Drawing.Point(55, 125);
  //          this.btn.Name = "btn";
  //          this.btn.Size = new System.Drawing.Size(100, 23);
  //          this.btn.TabIndex = 1;
  //          this.btn.Text = "Show Xml";
  //          this.btn.Click += new System.EventHandler(this.showXml_click);
  //          // 
  //          // BarGraphForm
  //          // 
  //          this.ClientSize = new System.Drawing.Size(199, 141);
  //          this.Controls.Add(this.grid);
  //          this.Controls.Add(this.btn);
  //          this.Name = "BarGraphForm";
  //          this.Text = "Bar Graph";
  //          this.Load += new System.EventHandler(this.BarGraphForm_Load);
  //          ((System.ComponentModel.ISupportInitialize)(this.grid)).EndInit();
  //          this.ResumeLayout(false);

		//	}


		//private void showXml_click(object sender, System.EventArgs e) 
		//{
		//	XmlReader inReader = GetXml();

		//	StringWriter sw = new StringWriter();
		//	XmlTextWriter xr = new XmlTextWriter(sw);
		//	xr.WriteNode(inReader,false);
			
		//	MessageBox.Show(sw.ToString());
		
		//	}

		//public XmlReader GetXml() {

		//	Stream streamXml = new MemoryStream();
		//	ds.WriteXml(streamXml);
		//	streamXml.Position = 0;

		//	XmlReader graphReader = new XmlTextReader(streamXml);
		//	return graphReader;

		//	}

		//static void Main() 
		//{
		//	Application.Run(new BarGraphForm());
		//}

  //      private void BarGraphForm_Load(object sender, EventArgs e)
  //      {

  //      }
    }
}