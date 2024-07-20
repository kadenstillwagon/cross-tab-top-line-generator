import './TopLine.css'
import TopLineColumnHeaderRow from './TopLineColumnHeaderRow'
import TopLineRow from './TopLineRow';
import ExportTopLineAsExcelButton from './ExportTopLineAsExcelButton';

function CrossTab( props ) {

    const rowsArray = props.rowsArray;
    const values = props.values;

    const selection = props.selectedQuestion;
    const selectionIndex = rowsArray[0].indexOf(selection);

    var column = [];

    const createColumn = () => {
        values.map((row, index) => {
            if (row[selectionIndex] != undefined) {
                column.push(row[selectionIndex]);
            }
        });
    }
    createColumn();

    console.log(column)

    var colDict = {};

    const createColumnDict = () => {
        column.map((ans, index) => {
            if (Object.keys(colDict).includes(ans)) {
                colDict[ans] += 1;
            } else {
                colDict[ans] = 1;
            }
        });

        var colKeys = Object.keys(colDict);
        var colKeys_sorted = colKeys.sort((a, b) => a - b);
        var sorted_colDict = {}

        colKeys_sorted.map((key, index) => {
            sorted_colDict[key] = colDict[key];
        });

        colDict = sorted_colDict;
    }

    createColumnDict();
    console.log(colDict);

    var frequencyArray = [];
    var percentageArray = [];

    const calculateTopLine = () => {
    
        Object.keys(colDict).map((colKey, index) => {
            frequencyArray.push(colDict[colKey])
            var percentage = Math.round(((colDict[colKey] / column.length) * 100) * 100) / 100;
            percentageArray.push(percentage)
        });
    }

    calculateTopLine();
    console.log(frequencyArray);
    console.log(percentageArray);


    return (
            
        <div className='top_line_container'>
            <h1 className='x-label'>{selection} Top Line</h1>
            <TopLineColumnHeaderRow />
            {frequencyArray.map((val, index) => {
                return (
                    <TopLineRow rowLabel={Object.keys(colDict)[index]} value={frequencyArray[index]} percentage={percentageArray[index]}/>
                )
            })
            }
            <TopLineRow rowLabel={'Total'} value={column.length} percentage={100}/>
            <ExportTopLineAsExcelButton colDict={colDict} values={frequencyArray} percentages={percentageArray} total={column.length} selection={selection}/>
    </div>
    )
}

export default CrossTab