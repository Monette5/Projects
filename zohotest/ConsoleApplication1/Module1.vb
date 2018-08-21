Imports System.Xml


Module Module1

    Sub Main()

const URLString as String = "https://crm.zoho.com/crm/private/xml/Leads/getMyRecords?authtoken=3d21f5f2032137bfe8ce43265c31a9da&scope=crmapi"
Dim reader As XmlTextReader = New XmlTextReader (URLString)
 Do While (reader.Read())
            Select Case reader.NodeType
                Case XmlNodeType.Element 'Display beginning of element.
                    Console.Write("<" + reader.Name)
                    If reader.HasAttributes Then 'If attributes exist
                        While reader.MoveToNextAttribute()
                            'Display attribute name and value.
                            Console.Write(" {0}='{1}'", reader.Name, reader.Value)
                        End While
                    End If
                    Console.WriteLine(">")
                Case XmlNodeType.Text 'Display the text in each element.
                    Console.WriteLine(reader.Value)
                Case XmlNodeType.EndElement 'Display end of element.
                    Console.Write("</" + reader.Name)
                    Console.WriteLine(">")
            End Select
        Loop


    End Sub

End Module
