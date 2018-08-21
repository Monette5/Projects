Imports System.Text
Imports System.Data
Imports Quintadena.Utility
Imports QDQW0126

Public Class zohoForm
    Private Const TABLE_NAME As String = "PrimaryContacts" 'if qw ever activate SecondaryContacts (be enabling an import to it) we want to be able to use that table
    Private _AddressLabels As AddressLabels
    Private _bEdit As Boolean = False
    Private _bindingSource As BindingSource
    Private _dataAdapter As IDbDataAdapter
    Private _dataSet As DataSet
    Friend _1ryC1 As zohoForm
    Friend _fMain As frmContacts
    Private _QWDB As IQWDatabase
    Private _cmdSel As IDbCommand
    Private _cmdDel As IDbCommand
    Private _cmdIns As IDbCommand
    Private _cmdUpd As IDbCommand
    Private _CompanyName As String
    Private txtPFirstName As Object
    Private txtPID As Object
    Private txtPCompany As Object
    Private btnSelSoTo1 As Object
    Private btnSelShTo1 As Object
    Private btnSelBiTo1 As Object
    Private tabPage1 As Object
    Private btnSwap1 As Object
    Private ttAdd1 As Object
    Private Controls As IEnumerable(Of Control)
    Private txtPPostalCode1 As TextBox
    Private txtPEmail1 As TextBox

    Public Property BindingSource() As BindingSource
        Get
            Return _bindingSource
        End Get
        Set(value As BindingSource)
            _bindingSource = value
        End Set
    End Property

    Public ReadOnly Property IsPrimary As Boolean
        Get
            Return ReferenceEquals(Me, Me._1ryC)
        End Get
    End Property

    Public ReadOnly Property IsSecondary As Boolean
        Get
            Return Not Me.IsPrimary()
        End Get
    End Property

    Public Property Add As Object

    Public Sub Init()
        _QWDB = QwDb.Instance
        _cmdSel = _QWDB.GetQWDbCommand()
        _cmdDel = _QWDB.GetQWDbCommand()
        _cmdIns = _QWDB.GetQWDbCommand()
        _cmdUpd = _QWDB.GetQWDbCommand()

        'Me.btnSwap.Visible = My.Settings.ShowSwapButtons
        'FormatAddressLabelButtons()
        'RenameLabels()
        'HideFields(Me)
        'Me.txt1ry2ryFlag.Tag = App.IS_SECONDARY_FLAG
        'Me.txt1ry2ryFlag.DataBindings.Clear()
        'Me.txt1ry2ryFlag.DataBindings.Add(New Binding("Text", _bindingSource, App.IS_SECONDARY_FLAG))

        'What follows is an attempt to make the SEL/INS/UPD/DEL queries self-maintaining and db-agnostic under changes to the QW db schema and the ctrlContactSelector itself.
        'the logic is that the set of bound fields on the control is identical to the set of database table fields of interest. Hence any new fields added to
        'the control will automatically be picked up here
        CreateSelectQuery()
        CreateDeleteQuery()
        CreateInsertQuery()
        CreateUpdateQuery()
    End Sub

    Private Sub CreateSelectQuery()
        _cmdSel.CommandText = "SELECT "
        For Each c As DataColumn In DirectCast(_bindingSource.DataSource, DataTable).Columns
            _cmdSel.CommandText &= c.ColumnName & ", "
        Next
        _cmdSel.CommandText = _cmdSel.CommandText.Trim({" "c, ","c})
        _cmdSel.CommandText &= " FROM " & TABLE_NAME & " WHERE " & App.IS_SECONDARY_FLAG & " = '" & (If(IsPrimary, "0", "1")) & "';"
    End Sub

    Private Sub CreateDeleteQuery()
        'this uses soft delete, as update seems less prone to concurrency exception than delete
        Dim Parm As IDbDataParameter = _QWDB.GetQWDbDataParameter()
        Parm.ParameterName = "ID"
        _cmdDel.CommandText = "UPDATE " & TABLE_NAME & " SET ExtraLng01 = -1, CUSTOMTEXT01= '{0}' WHERE ID= " & _QWDB.GetParameterPlaceholder(Parm) & " ;"
        _cmdDel.Parameters.Add(Parm)
    End Sub

    Private Sub CreateInsertQuery()
        Dim sbFields As New StringBuilder("INSERT INTO " & TABLE_NAME & " ( ")
        Dim sbValues As New StringBuilder(" VALUES (")
        For Each c As DataColumn In DirectCast(_bindingSource.DataSource, DataTable).Columns
            If Not (String.Equals(c.ColumnName, "ID", StringComparison.InvariantCultureIgnoreCase)) Then
                Dim Parm As IDbDataParameter = _QWDB.GetQWDbDataParameter()
                Parm.ParameterName = c.ColumnName
                Parm.SourceColumn = c.ColumnName
                sbFields.Append(c.ColumnName & ", ")
                sbValues.Append(_QWDB.GetParameterPlaceholder(Parm) & ", ")
                _cmdIns.Parameters.Add(Parm)
            End If
        Next
        sbFields.Remove(sbFields.Length - 2, 2)
        sbFields.Append(")")
        sbValues.Remove(sbValues.Length - 2, 2)
        sbValues.Append(")")
        _cmdIns.CommandText = sbFields.ToString() & sbValues.ToString()
    End Sub

    Private Sub CreateUpdateQuery()
        Dim sbFields As New StringBuilder("UPDATE " & TABLE_NAME & " SET ")
        Dim sbIdenty As New StringBuilder(" WHERE ")
        For Each c As DataColumn In DirectCast(_bindingSource.DataSource, DataTable).Columns
            Dim Parm As IDbDataParameter = _QWDB.GetQWDbDataParameter()
            Parm.ParameterName = c.ColumnName
            Parm.SourceColumn = c.ColumnName
            If (String.Equals(c.ColumnName, "ID", StringComparison.InvariantCultureIgnoreCase)) Then
                sbIdenty.Append(c.ColumnName & "=" & _QWDB.GetParameterPlaceholder(Parm) & ";")
            Else
                sbFields.Append(c.ColumnName & "=" & _QWDB.GetParameterPlaceholder(Parm) & ", ")
            End If
            _cmdUpd.Parameters.Add(Parm)
        Next

        'Access w/oledb has the bloody stupid feature that parameter names are ignored. The parm add order has to match the order you're going to use them in the query, hence ID must be last. 
        ' To avoid hardcoding the query, which would defeat the entire object of this design we have to remove it and readd it to guarantee it's last
        _cmdUpd.Parameters.RemoveAt("ID")
        Dim Parm2 As IDbDataParameter = _QWDB.GetQWDbDataParameter()
        Parm2.ParameterName = "ID"
        Parm2.SourceColumn = "ID"
        _cmdUpd.Parameters.Add(Parm2)
        '</stupidity>

        sbFields.Remove(sbFields.Length - 2, 2)
        _cmdUpd.CommandText = sbFields.ToString() & sbIdenty.ToString()
    End Sub

    Private Sub ToggleTextBoxes(container As zohoForm)
        For Each c As Control In container.Controls
            If TypeOf c Is TextBox Then
                CType(c, TextBox).ReadOnly = Not CType(c, TextBox).ReadOnly
            ElseIf c.HasChildren Then
                ToggleTextBoxes(c)
            End If
        Next
    End Sub

    Friend Sub SetBindings(container As Windows.Forms.Control)
        For Each c As Control In container.Controls
            If TypeOf c Is TextBox
                If Not IsNothing(c.Tag) AndAlso "Company Email Website".Contains(c.Tag)
                    c.DataBindings.Add(New Binding("Text", _bindingSource, c.Tag))
                    Program.LogThis(c.Tag, Quintadena.Utility.LogActivity.LogDetailLevel.Debugging)
                End If
            ElseIf c.HasChildren Then
                SetBindings(c)
            End If
        Next
    End Sub

    Private Sub AddC_Click(sender As System.Object, e As System.EventArgs) 'Handles Add.Click
        ToggleButtonAvailability(Me, sender)
        ToggleTextBoxes(Me)
        If Not _bEdit Then
            Me.Add.Image = My.Resources.database_save
            Dim row As DataRowView
            Dim newCompany As String = GetNewCompanyName(Me) 'must be done before the AddNew call 
            _bindingSource.EndEdit()
            row = CType(_bindingSource.AddNew(), DataRowView)
            row.Item(App.IS_SECONDARY_FLAG) = Me.IsSecondary()
            row.Item(My.Settings.SecondaryLinkOn) = newCompany
            _bindingSource.EndEdit()
            _bEdit = True
            Me.txtPFirstName.Focus()
        Else
            Me.Add.Image = My.Resources.application_form_add

            SetParms(_cmdIns, False)
            _QWDB.RunNonQuery(_cmdIns)
            Me.txtPID.Text = _QWDB.LastNewIdentity
            _bindingSource.EndEdit()
            _bEdit = False
        End If
    End Sub

    Private Sub SetParms(cmd As IDbCommand, SetIDParm As Boolean)
        Dim Parm As IDbDataParameter
        For Each c As DataColumn In DirectCast(_bindingSource.DataSource, DataTable).Columns
            If c.ColumnName <> "ID" OrElse SetIDParm Then
                Parm = cmd.Parameters.Item(c.ColumnName)
                Parm.Value = DirectCast(_bindingSource.Current, DataRowView).Item(c.ColumnName)
            End If
        Next
    End Sub

    Private Sub DelC_Click(sender As System.Object, e As System.EventArgs) 'Handles Del.Click
        Const sPrimaryWarning = vbCrLf & vbCrLf & "This action will remove the whole of {0} Company and all its Secondary Contacts!"

        Dim sPW = If(IsPrimary, String.Format(sPrimaryWarning, txtPCompany.Text.Trim()), String.Empty)

        If Not IsNothing(Me.BindingSource.Current) AndAlso Program.ShowQuestionMessage(String.Format("Please confirm deletion of {0} {1} of {2}.{3}", txtPFirstName.Text.Trim(), txtPLastName.Text.Trim(), txtPCompany.Text.Trim(), sPW)) = Windows.Forms.DialogResult.Yes Then
            Dim P As IDbDataParameter = _cmdDel.Parameters(0)
            _cmdDel.CommandText = String.Format(_cmdDel.CommandText, "Deleted by " & Environment.UserName & " at " & Now.ToString())
            P.Value = Me.txtPID.Text
            _QWDB.RunNonQuery(_cmdDel)
            _bindingSource.RemoveCurrent()
            _bindingSource.EndEdit()
        End If


    End Sub

    'Private Sub Edit_Click(sender As System.Object, e As System.EventArgs) Handles Edit.Click

    '    If Not IsNothing(BindingSource.Current) Then
    '        ToggleButtonAvailability(Me, sender)
    '        ToggleTextBoxes(Me)
    '        If Not _bEdit Then
    '            _CompanyName = Me.txtPCompany.Text
    '            _bEdit.Image = My.Resources.database_save
    '            _bEdit = True
    '        Else
    '            _bEdit.Image = My.Resources.application_form_edit
    '            _bindingSource.EndEdit()
    '            SetParms(_cmdUpd, True)
    '            _QWDB.RunNonQuery(_cmdUpd)
    '            If ((Not String.Equals(_CompanyName, Me.txtPCompany.Text)) AndAlso (Me.IsPrimary)) Then
    '                _QWDB.RunQuery(String.Format("UPDATE PRIMARYCONTACTS SET COMPANY = '{0}' WHERE COMPANY = '{1}'", Me.txtPCompany.Text, _CompanyName))
    '                _fMain.RefreshSecondary()
    '            End If
    '            _bEdit = False
    '        End If
    '    End If
    'End Sub

    'Private Sub btnSwap_Click(sender As System.Object, e As System.EventArgs) Handles btnSwap.Click
        'currently removed because (a) won't work without rewriting the queries to the new db management ideas and (b) doing that would
        'require a lot of what-if that suggests that even the present implementation is logically problematic. withdrawn feature.
        'If Not IsNothing(BindingSource.Current) Then
        '    Dim row As DataRowView = BindingSource.Current
        '    If IsPrimary AndAlso Program.ShowQuestionMessage(String.Format("If this is the only contact for {0} you will lose this record by continuing! Continue?", row.Item("COMPANY"))) = DialogResult.No Then
        '        Exit Sub
        '    End If
        '    _bindingSource.EndEdit()
        '    If IsDBNull(row.Item(App.IS_SECONDARY_FLAG)) Then
        '        row.Item(App.IS_SECONDARY_FLAG) = True
        '    Else
        '        row.Item(App.IS_SECONDARY_FLAG) = Not row.Item(App.IS_SECONDARY_FLAG)
        '    End If
        '    _bindingSource.EndEdit()
        '    _tableAdapter.Update(_bindingSource.DataSource)
        '    _bindingSource.ResetBindings(False)
        '    _1ryC.TableAdapter.Fill(_1ryC.BindingSource.DataSource.PrimaryContacts)

        'End If
    'End Sub

    Private Function GetNewCompanyName(existing As zohoForm) As String
        If existing.IsPrimary Then
            Return "NEW " & My.Settings.SecondaryLinkOn
        Else
            Return _1ryC.BindingSource.Current.Item(My.Settings.SecondaryLinkOn)
        End If
    End Function

    Private Sub FormatAddressLabelButtons()
        _AddressLabels = New AddressLabels
        Me.btnSelSoTo1.Text = _AddressLabels.AddressLabels(0)

        Me.btnSelShTo1.Text = _AddressLabels.AddressLabels(1)


        If _AddressLabels.AddressLabels.GetUpperBound(0) = 1 Then
            Me.btnSelBiTo1.Visible = False
        Else
            Me.btnSelBiTo1.Text = _AddressLabels.AddressLabels(2)
        End If
    End Sub

    Private Sub RenameLabels()
        If (Not IsNothing(_fMain.RenamedFieldLabels)) Then
            For Each ik As IniKey In _fMain.RenamedFieldLabels.IniKeys
                FindAndRelabel(Me, ik)
            Next
        End If
        Dim tp As Windows.Forms.TabPage
        For i As Integer = Me.tabPage1.TabPages.Count - 1 To 0 Step -1
            tp = Me.tabPage1.TabPages.Item(i)
            tp.Text = My.Settings.TabNames(i)
            If ((Me.IsSecondary AndAlso My.Settings.HiddenSecondaryTabs.Contains(i.ToString)) OrElse (Me.IsPrimary AndAlso My.Settings.HiddenPrimaryTabs.Contains(i.ToString))) Then
                Me.tabPage1.TabPages.Remove(tp)
            End If
        Next

        If IsPrimary Then
            Me.btnSwap1.Image = My.Resources.arrow_down
            Me.ttAdd1.SetToolTip(Me.btnSwap1, "Make this a Secondary Contact")
        Else
            Me.btnSwap1.Image = My.Resources.arrow_up
            Me.ttAdd1.SetToolTip(Me.btnSwap1, "Make this a Primary Contact")
        End If
    End Sub

    Private Sub ToggleButtonAvailability(parent As Control, keep As Windows.Forms.Button)
        For Each c As Windows.Forms.Control In parent.Controls
            If (TypeOf c Is Button) AndAlso (Not ReferenceEquals(c, keep)) Then
                c.Enabled = Not c.Enabled
            ElseIf (c.HasChildren) Then
                ToggleButtonAvailability(c, keep)
            End If
        Next
    End Sub

    Private Sub FindAndRelabel(Container As zohoForm, ik As Quintadena.Utility.IniKey)
        For Each c As Control In Container.Controls
            If TypeOf c Is Label AndAlso c.Tag = ik.KeyName Then
                c.Text = ik.KeyValue
            ElseIf c.HasChildren Then
                FindAndRelabel(c, ik)
            End If
        Next
    End Sub

    Friend Sub WriteToQuoteWerks(destination As Quintadena.Utility.AddressType)
        If Not IsNothing(Me.BindingSource.Current) Then
            Dim writeTo As New Quintadena.Utility.QwGUIAddressSet(destination, _1ryC1.txtPAddress1.Text, _1ryC1.txtPAddress2.Text, _1ryC1.txtPAddress3.Text, _
                                                                          _1ryC1.txtPCity.Text, _1ryC1.txtPAccountRef.Text, _1ryC1.txtPCompany.Text, String.Format("{0}{2}{1}", _1ryC1.txtPFirstName.Text, _1ryC1.txtPLastName.Text, " ").Trim(), _
                                                                          _1ryC1.txtPCountry.Text, "", _1ryC1.txtPEmail.Text, _1ryC1.txtPFax.Text, "", _1ryC1.txtPMobile.Text, _1ryC1.txtPPhone.Text, "", _1ryC1.txtPPostalCode.Text, _1ryC1.TextBox12.Text, _1ryC1.txtPState.Text, _1ryC1.txtPTitle.Text)

            If Not Me.IsPrimary() Then
                Dim r As DataRowView = _bindingSource.Current
                For Each c As DataColumn In r.DataView.Table.Columns
                    If Not IsDBNull(r.Item(c.ColumnName)) AndAlso String.Compare(r.Item(c.ColumnName).ToString, String.Empty, True) <> 0 Then
                        writeTo.UpdateField(c.ColumnName, r.Item(c.ColumnName).ToString)
                    End If
                Next
                'Always overwrite the 2ry firstname and lastname, even if blank
                If IsDBNull(r.Item("FIRSTNAME")) OrElse String.Compare(r.Item("FIRSTNAME").ToString, String.Empty, True) = 0 Then
                    writeTo.FirstName = String.Empty
                End If
                If IsDBNull(r.Item("LASTNAME")) OrElse String.Compare(r.Item("LASTNAME").ToString, String.Empty, True) = 0 Then
                    writeTo.LastName = String.Empty
                End If
            End If
            writeTo.WriteToQuoteWerks()
            If destination = Quintadena.Utility.AddressType.SOLDTO Then PerformDataLinks()
        End If

    End Sub

    Private Sub btnSelSoTo_Click(sender As System.Object, e As System.EventArgs) Handles btnSelSoTo1.Click
        WriteToQuoteWerks(Quintadena.Utility.AddressType.SOLDTO)
    End Sub

    Private Sub btnSelShTo_Click(sender As System.Object, e As System.EventArgs) Handles btnSelShTo1.Click
        WriteToQuoteWerks(Quintadena.Utility.AddressType.SHIPTO)
    End Sub

    Private Sub btnSelBiTo_Click(sender As System.Object, e As System.EventArgs) Handles btnSelBiTo1.Click
        WriteToQuoteWerks(Quintadena.Utility.AddressType.BILLTO)
    End Sub

    Private Sub btnSelAll_Click(sender As System.Object, e As System.EventArgs) Handles btnSelAll1.Click
        WriteToQuoteWerks(Quintadena.Utility.AddressType.SOLDTO)
        WriteToQuoteWerks(Quintadena.Utility.AddressType.SHIPTO)
        WriteToQuoteWerks(Quintadena.Utility.AddressType.BILLTO)
    End Sub

    ''' <summary>
    ''' replicates the qw DataLink feature of pulling additional information into the quote at contact selection time
    ''' </summary>
    ''' <remarks></remarks>
    Private Sub PerformDataLinks()

        Dim dls As New Quintadena.Utility.QwDataLinks
        For Each dl As Quintadena.Utility.QWDataLink In dls.QWDataLinkSet
            Try
                'FIND THE 1RY EQUIVALENT FIRST AND THEN SUB IN THE 2RY IF POPULATED AND DIFFERENT
                Dim sValue As String = IIf(Not IsDBNull(Me._1ryC.BindingSource.Current.Item(dl.SourceField)), Me._1ryC.BindingSource.Current.Item(dl.SourceField), String.Empty)

                If Me.IsSecondary AndAlso Not IsDBNull(Me.BindingSource.Current.Item(dl.SourceField)) AndAlso (Me.BindingSource.Current.Item(dl.SourceField) <> "") Then
                    sValue = Me.BindingSource.Current.Item(dl.SourceField)
                End If

                Quintadena.Utility.QuoteWerks.Instance.SetDocumentHeaderValue(dl.DestField, sValue)
            Catch
                'high chance of encountering rubbish in that config section - eg taken over from another crm
            End Try
        Next
    End Sub

    Private Sub HideFields(Container As Windows.Forms.Control)
        For Each c As Control In Container.Controls
            If ((Not c.Tag Is Nothing) _
                AndAlso ((Me.IsSecondary AndAlso My.Settings.HiddenSecondaryFields.ToUpper.Contains(c.Tag.ToString.ToUpper)) _
                           OrElse (Me.IsPrimary AndAlso My.Settings.HiddenPrimaryFields.ToUpper.Contains(c.Tag.ToString.ToUpper)))) Then
                c.Hide()
            ElseIf c.HasChildren Then
                HideFields(c)
            End If
        Next
    End Sub

    'Private Sub Email(sender As System.Object, e As System.EventArgs) Handles lblEmail.Click, PictureBox1.Click
    '    ExternalApp(Me.txtPEmail, "mailto:")
    'End Sub

    'Private Sub Map(sender As System.Object, e As System.EventArgs) Handles Label10.Click, PictureBox2.Click
    '    ExternalApp(Me.txtPPostalCode, "http://google.com/maps?q=")
    'End Sub

    Private Sub ExternalApp(x As TextBox, url As String)
        If Not IsNothing(x.Text) Then
            System.Diagnostics.Process.Start(String.Format("{0}{1}", url, x.Text.Replace(" ", "")))
        End If
    End Sub

    Public Shared Widening Operator CType(v As zohoForm) As zohoForm
        Throw New NotImplementedException()
    End Operator
End Class