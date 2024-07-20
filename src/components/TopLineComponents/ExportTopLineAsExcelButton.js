import './ExportTopLineAsExcelButton.css'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function ExportTopLineAsExcelButton (props) {

    const create_json_dictionary = () => {
        const row_labels = Object.keys(props.colDict)

        var data = []


        // data.push(first_line)
 
        row_labels.map((row_label, row_index) => {
            var row_data = {}

            row_data['Response'] = row_label
        
            row_data['Freq'] = String(props.values[row_index])
            row_data['%'] = String(props.percentages[row_index]) + '%'

            data.push(row_data)
        }) 

        var total_row = {}
        total_row['Response'] = 'Total'
        total_row['Freq'] = String(props.total)
        total_row['%'] = '100%'

        data.push(total_row)

        var last_line = {}
        last_line['Response'] = props.selection + ' Top Line'
        data.push(last_line)

        return data

    }

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(create_json_dictionary());
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    
        // Buffer to store the generated Excel file
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    
        saveAs(blob, props.selection + " Top Line.xlsx");
    };


    return (
        <button className="export_top_line_as_excel_button" onClick={exportToExcel}>
            Export
        </button>
    )
}

export default ExportTopLineAsExcelButton