import CrossTabRowHeader from './CrossTabRowHeader';
import CrossTabBox from './CrossTabBox';
import './CrossTabTotalRow.css'
import CrossTabRowTotalBox from './CrossTabRowTotalBox';

function CrossTabTotalRow( props ) {

    const calculateColumnTotal = (index) => {
        var total = 0;
        props.values.map((row, ind) => {
            total += row[index];
        })

        return total;
    }

    return (
        <div className='cross-tab-total-row-container'>
            <CrossTabRowHeader value='Total'/>
            {props.values[0].map((value, index) => {                
                return (
                    <CrossTabRowTotalBox percentage={100} value={calculateColumnTotal(index)} />
                )
            })}
            <CrossTabRowTotalBox percentage={100} value={props.total} />
        </div>
        
    )
}

export default CrossTabTotalRow;