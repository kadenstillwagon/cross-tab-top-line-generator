import './CrossTabColumnHeaderRow.css'
import CrossTabColumnHeader from './CrossTabColumnHeader';
import CrossTabRowHeader from './CrossTabRowHeader';
import CrossTabRowTotalBox from './CrossTabRowTotalBox';


function CrossTabColumnHeaderRow( props ) {
    return (
        <div className='cross-tab-column-header-row-container'>
            <CrossTabRowHeader />
            {props.labels.map((label, index) => {
                return (
                    <CrossTabColumnHeader label={label}/>
                )})
            }
            <CrossTabColumnHeader label={'Total'}/>
        </div>
    )
}

export default CrossTabColumnHeaderRow;