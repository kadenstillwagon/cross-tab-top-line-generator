import './TopLineRow.css'
import TopLineRowLabelBox from './TopLineRowLabelBox';
import TopLineValueBox from './TopLineValueBox';


function TopLineRow( props ) {

    return (
        <div className='top-line-row-container'>
            <TopLineRowLabelBox value={props.rowLabel} />
            <TopLineValueBox value={props.value}/>
            <TopLineValueBox value={props.percentage.toString() + '%'}/>
        </div>
    )
}

export default TopLineRow;