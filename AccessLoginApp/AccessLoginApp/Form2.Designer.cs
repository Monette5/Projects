namespace AccessLoginApp
{
    partial class Form2
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.Windows.Forms.DataVisualization.Charting.ChartArea chartArea4 = new System.Windows.Forms.DataVisualization.Charting.ChartArea();
            System.Windows.Forms.DataVisualization.Charting.Legend legend4 = new System.Windows.Forms.DataVisualization.Charting.Legend();
            System.Windows.Forms.DataVisualization.Charting.Series series4 = new System.Windows.Forms.DataVisualization.Charting.Series();
            this.sectionvalue = new System.Windows.Forms.Label();
            this.keyname = new System.Windows.Forms.Label();
            this.keyvalue = new System.Windows.Forms.Label();
            this.sectname_txt = new System.Windows.Forms.TextBox();
            this.valname_txt = new System.Windows.Forms.TextBox();
            this.keyname_txt = new System.Windows.Forms.TextBox();
            this.btn_save = new System.Windows.Forms.Button();
            this.btn_edit = new System.Windows.Forms.Button();
            this.btn_delete = new System.Windows.Forms.Button();
            this.comboBox1 = new System.Windows.Forms.ComboBox();
            this.listBox1 = new System.Windows.Forms.ListBox();
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.btn_loadtable = new System.Windows.Forms.Button();
            this.chart1 = new System.Windows.Forms.DataVisualization.Charting.Chart();
            this.btn_chart = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.chart1)).BeginInit();
            this.SuspendLayout();
            // 
            // sectionvalue
            // 
            this.sectionvalue.AutoSize = true;
            this.sectionvalue.Location = new System.Drawing.Point(52, 32);
            this.sectionvalue.Name = "sectionvalue";
            this.sectionvalue.Size = new System.Drawing.Size(74, 13);
            this.sectionvalue.TabIndex = 0;
            this.sectionvalue.Text = "Section Name";
            // 
            // keyname
            // 
            this.keyname.AutoSize = true;
            this.keyname.Location = new System.Drawing.Point(52, 70);
            this.keyname.Name = "keyname";
            this.keyname.Size = new System.Drawing.Size(56, 13);
            this.keyname.TabIndex = 1;
            this.keyname.Text = "Key Name";
            // 
            // keyvalue
            // 
            this.keyvalue.AutoSize = true;
            this.keyvalue.Location = new System.Drawing.Point(52, 110);
            this.keyvalue.Name = "keyvalue";
            this.keyvalue.Size = new System.Drawing.Size(55, 13);
            this.keyvalue.TabIndex = 2;
            this.keyvalue.Text = "Key Value";
            // 
            // sectname_txt
            // 
            this.sectname_txt.Location = new System.Drawing.Point(135, 32);
            this.sectname_txt.Name = "sectname_txt";
            this.sectname_txt.Size = new System.Drawing.Size(100, 20);
            this.sectname_txt.TabIndex = 3;
            this.sectname_txt.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
            // 
            // valname_txt
            // 
            this.valname_txt.Location = new System.Drawing.Point(135, 107);
            this.valname_txt.Name = "valname_txt";
            this.valname_txt.Size = new System.Drawing.Size(100, 20);
            this.valname_txt.TabIndex = 4;
            // 
            // keyname_txt
            // 
            this.keyname_txt.Location = new System.Drawing.Point(135, 67);
            this.keyname_txt.Name = "keyname_txt";
            this.keyname_txt.Size = new System.Drawing.Size(100, 20);
            this.keyname_txt.TabIndex = 5;
            // 
            // btn_save
            // 
            this.btn_save.Location = new System.Drawing.Point(12, 185);
            this.btn_save.Name = "btn_save";
            this.btn_save.Size = new System.Drawing.Size(75, 23);
            this.btn_save.TabIndex = 6;
            this.btn_save.Text = "Save Data";
            this.btn_save.UseVisualStyleBackColor = true;
            this.btn_save.Click += new System.EventHandler(this.btn_save_Click);
            // 
            // btn_edit
            // 
            this.btn_edit.Location = new System.Drawing.Point(104, 185);
            this.btn_edit.Name = "btn_edit";
            this.btn_edit.Size = new System.Drawing.Size(75, 23);
            this.btn_edit.TabIndex = 7;
            this.btn_edit.Text = "Edit Data";
            this.btn_edit.UseVisualStyleBackColor = true;
            this.btn_edit.Click += new System.EventHandler(this.btn_edit_Click);
            // 
            // btn_delete
            // 
            this.btn_delete.Location = new System.Drawing.Point(197, 184);
            this.btn_delete.Name = "btn_delete";
            this.btn_delete.Size = new System.Drawing.Size(75, 23);
            this.btn_delete.TabIndex = 8;
            this.btn_delete.Text = "Delete";
            this.btn_delete.UseVisualStyleBackColor = true;
            this.btn_delete.Click += new System.EventHandler(this.btn_delete_Click);
            // 
            // comboBox1
            // 
            this.comboBox1.FormattingEnabled = true;
            this.comboBox1.Location = new System.Drawing.Point(295, 32);
            this.comboBox1.Name = "comboBox1";
            this.comboBox1.Size = new System.Drawing.Size(121, 21);
            this.comboBox1.TabIndex = 9;
            this.comboBox1.SelectedIndexChanged += new System.EventHandler(this.comboBox1_SelectedIndexChanged);
            // 
            // listBox1
            // 
            this.listBox1.FormattingEnabled = true;
            this.listBox1.Location = new System.Drawing.Point(295, 70);
            this.listBox1.Name = "listBox1";
            this.listBox1.Size = new System.Drawing.Size(121, 30);
            this.listBox1.TabIndex = 10;
            this.listBox1.SelectedIndexChanged += new System.EventHandler(this.listBox1_SelectedIndexChanged);
            // 
            // dataGridView1
            // 
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Location = new System.Drawing.Point(278, 152);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.Size = new System.Drawing.Size(240, 150);
            this.dataGridView1.TabIndex = 11;
            this.dataGridView1.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView1_CellContentClick);
            this.dataGridView1.SelectionChanged += new System.EventHandler(this.dataGridView1_SelectionChanged);
            // 
            // btn_loadtable
            // 
            this.btn_loadtable.Location = new System.Drawing.Point(197, 266);
            this.btn_loadtable.Name = "btn_loadtable";
            this.btn_loadtable.Size = new System.Drawing.Size(75, 23);
            this.btn_loadtable.TabIndex = 12;
            this.btn_loadtable.Text = "Load Table";
            this.btn_loadtable.UseVisualStyleBackColor = true;
            this.btn_loadtable.Click += new System.EventHandler(this.btn_loadtable_Click);
            // 
            // chart1
            // 
            chartArea4.Name = "ChartArea1";
            this.chart1.ChartAreas.Add(chartArea4);
            legend4.Name = "Legend1";
            this.chart1.Legends.Add(legend4);
            this.chart1.Location = new System.Drawing.Point(236, 345);
            this.chart1.Name = "chart1";
            series4.ChartArea = "ChartArea1";
            series4.Legend = "Legend1";
            series4.Name = "Value";
            this.chart1.Series.Add(series4);
            this.chart1.Size = new System.Drawing.Size(300, 150);
            this.chart1.TabIndex = 13;
            this.chart1.Text = "chart1";
            this.chart1.Click += new System.EventHandler(this.chart1_Click);
            // 
            // btn_chart
            // 
            this.btn_chart.Location = new System.Drawing.Point(103, 429);
            this.btn_chart.Name = "btn_chart";
            this.btn_chart.Size = new System.Drawing.Size(75, 23);
            this.btn_chart.TabIndex = 14;
            this.btn_chart.Text = "Load Chart";
            this.btn_chart.UseVisualStyleBackColor = true;
            this.btn_chart.Click += new System.EventHandler(this.btn_chart_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(24, 13);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(35, 13);
            this.label1.TabIndex = 15;
            this.label1.Text = "label1";
            // 
            // Form2
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(548, 547);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.btn_chart);
            this.Controls.Add(this.chart1);
            this.Controls.Add(this.btn_loadtable);
            this.Controls.Add(this.dataGridView1);
            this.Controls.Add(this.listBox1);
            this.Controls.Add(this.comboBox1);
            this.Controls.Add(this.btn_delete);
            this.Controls.Add(this.btn_edit);
            this.Controls.Add(this.btn_save);
            this.Controls.Add(this.keyname_txt);
            this.Controls.Add(this.valname_txt);
            this.Controls.Add(this.sectname_txt);
            this.Controls.Add(this.keyvalue);
            this.Controls.Add(this.keyname);
            this.Controls.Add(this.sectionvalue);
            this.Name = "Form2";
            this.Text = "Form2";
            this.Load += new System.EventHandler(this.Form2_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.chart1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label sectionvalue;
        private System.Windows.Forms.Label keyname;
        private System.Windows.Forms.Label keyvalue;
        private System.Windows.Forms.TextBox sectname_txt;
        private System.Windows.Forms.TextBox valname_txt;
        private System.Windows.Forms.TextBox keyname_txt;
        private System.Windows.Forms.Button btn_save;
        private System.Windows.Forms.Button btn_edit;
        private System.Windows.Forms.Button btn_delete;
        private System.Windows.Forms.ComboBox comboBox1;
        private System.Windows.Forms.ListBox listBox1;
        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.Button btn_loadtable;
        private System.Windows.Forms.DataVisualization.Charting.Chart chart1;
        private System.Windows.Forms.Button btn_chart;
        private System.Windows.Forms.Label label1;
    }
}