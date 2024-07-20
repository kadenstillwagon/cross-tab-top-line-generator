import './CrossTabRow.css'
import CrossTabBox from './CrossTabBox';
import CrossTabRowHeader from './CrossTabRowHeader';
import CrossTabRowTotalBox from './CrossTabRowTotalBox';


function CrossTabRow( props ) {
    var total = 0;

    props.values.map((value, index) => {
        total += value;
    })

    var percentage = Math.round(((total / props.total) * 100) * 100) / 100;

    return (
        <div className='cross-tab-row-container'>
            <CrossTabRowHeader value={props.rowLabel} />
            {props.percentages.map((percentage, index) => {
                return (
                    <CrossTabBox percentage={percentage} value={props.values[index]}/>
                )})
            }
            <CrossTabRowTotalBox percentage={percentage} value={total}/>
        </div>
    )
}

export default CrossTabRow;