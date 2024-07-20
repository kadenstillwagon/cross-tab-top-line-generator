import './ExportAsExcelButton.css'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function ExportAsExcelButton (props) {

    const calculateColumnTotal = (index) => {
        var total = 0;
        props.similarityMatrix.map((row, ind) => {
            total += row[index];
        })

        return total;
    }


    const create_json_dictionary = () => {
        const row_labels = Object.keys(props.col1Dict)
        const column_labels = Object.keys(props.col2Dict)

        var data = []

        

        // data.push(first_line)
 
        row_labels.map((row_label, row_index) => {
            var row_percentage_data = {}
            var row_total = 0
            row_percentage_data[0] = row_label
            column_labels.map((col_label, col_index) => {
                row_percentage_data[col_label] = String(props.percentageMatrix[row_index][col_index]) + '%'
                row_total += props.similarityMatrix[row_index][col_index]
            })

            row_percentage_data['Row Totals'] = String(Math.round((row_total / props.total) * 10000) / 100) + '%'
            data.push(row_percentage_data)

            var row_value_data = {}
            row_value_data[0] = " "
            column_labels.map((col_label, col_index) => {
                row_value_data[col_label] = String(props.similarityMatrix[row_index][col_index])
            })

            row_value_data['Row Totals'] = String(row_total)
            data.push(row_value_data)
        }) 

        var total_row_percentages = {}
        total_row_percentages[0] = 'Col Totals'
        column_labels.map((col_label, col_index) => {
            total_row_percentages[col_label] = '100%'
        })

        total_row_percentages['Row Totals'] = '100%'

        var total_row_values = {}
        column_labels.map((col_label, col_index) => {
            total_row_values[col_label] = String(calculateColumnTotal(col_index))
        })

        total_row_values['Row Totals'] = String(props.total)

        data.push(total_row_percentages)
        data.push(total_row_values)

        var last_line = {}
        last_line[0] = props.selectionOne + ' by ' + props.selectionTwo + ' Cross Tab'
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
    
        saveAs(blob, props.selectionOne + " by " + props.selectionTwo + " Cross Tab.xlsx");
    };


    return (
        <button className="export_as_excel_button" onClick={exportToExcel}>
            Export
        </button>
    )
}

export default ExportAsExcelButton