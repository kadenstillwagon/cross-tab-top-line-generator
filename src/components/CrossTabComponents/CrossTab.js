import './CrossTab.css'
import CrossTabBox from './CrossTabBox';
import CrossTabRow from './CrossTabRow';
import CrossTabColumnHeaderRow from './CrossTabColumnHeaderRow';
import CrossTabTotalRow from './CrossTabTotalRow';
import ExportAsExcelButton from './ExportAsExcelButton';

function CrossTab( props ) {

    const rowsArray = props.rowsArray;
    const values = props.values;

    const selectionOne = props.selectionOne;
    const selectionOneIndex = rowsArray[0].indexOf(selectionOne);

    const selectionTwo = props.selectionTwo;
    const selectionTwoIndex = rowsArray[0].indexOf(selectionTwo)

    var columnOne = [];
    var columnTwo = [];

    const createColumns = () => {
        values.map((row, index) => {
            if (row[selectionOneIndex] != undefined) {
                columnOne.push(row[selectionOneIndex]);
            }
            if (row[selectionTwoIndex] != undefined) {
                columnTwo.push(row[selectionTwoIndex]);
            }
        });
    }
    createColumns();

    console.log(columnOne)
    console.log(columnTwo)

    var col1Dict = {};
    var col2Dict = {};

    const createColumnDicts = () => {
        columnOne.map((ans, index) => {
            if (Object.keys(col1Dict).includes(ans)) {
                col1Dict[ans].push(index);
            } else {
                col1Dict[ans] = [index];
            }
        });

        var col1Keys = Object.keys(col1Dict);
        var col1Keys_sorted = col1Keys.sort((a, b) => a - b);
        var sorted_col1Dict = {}

        col1Keys_sorted.map((key, index) => {
            sorted_col1Dict[key] = col1Dict[key];
        });

        col1Dict = sorted_col1Dict;



        columnTwo.map((ans, index) => {
            if (Object.keys(col2Dict).includes(ans)) {
                col2Dict[ans].push(index);
            } else {
                col2Dict[ans] = [index];
            }
        });

        var col2Keys = Object.keys(col2Dict);
        var col2Keys_sorted = col2Keys.sort((a, b) => a - b);
        var sorted_col2Dict = {}

        col2Keys_sorted.map((key, index) => {
            sorted_col2Dict[key] = col2Dict[key];
        });

        col2Dict = sorted_col2Dict;

    }

    createColumnDicts();
    console.log(col1Dict);
    console.log(col2Dict);


    var similarityMatrix = [];
    var percentageMatrix = [];

    const calculateCrossTab = () => {
    
        Object.keys(col1Dict).map((col1Key, index) => {
            var row = [];
            var row_percentages = [];
            var num_similar = 0;

            Object.keys(col2Dict).map((col2Key, index) => {
                const col1_indices = col1Dict[col1Key];
                const col2_indices = col2Dict[col2Key];

                const num_similar = col1_indices.filter(value => col2_indices.includes(value)).length;
                row.push(num_similar);

                const percentage = Math.round(((num_similar / col2Dict[col2Key].length) * 100) * 100) / 100;
                row_percentages.push(percentage);

            });

            similarityMatrix.push(row);
            percentageMatrix.push(row_percentages);
        });
    }

    calculateCrossTab();
    console.log('Similarity Matrix')
    console.log(similarityMatrix);
    console.log('Percentage Matrix')
    console.log(percentageMatrix);


    return (
            
        <div className='cross_tab_container'>
            <h1 className='x-label'>{selectionOne} by {selectionTwo}</h1>
            <CrossTabColumnHeaderRow labels={Object.keys(col2Dict)}/>
            {percentageMatrix.map((percentageRow, index) => {
                return (
                    <CrossTabRow total={columnOne.length} rowLabel={Object.keys(col1Dict)[index]} percentages={percentageMatrix[index]} values={similarityMatrix[index]}/>
                )
            })
            }
            <CrossTabTotalRow total={columnOne.length} values={similarityMatrix}/>
            <ExportAsExcelButton col1Dict={col1Dict} col2Dict={col2Dict} similarityMatrix={similarityMatrix} percentageMatrix={percentageMatrix} total={columnOne.length} selectionOne={selectionOne} selectionTwo={selectionTwo}/>
    </div>
    )
}

export default CrossTab