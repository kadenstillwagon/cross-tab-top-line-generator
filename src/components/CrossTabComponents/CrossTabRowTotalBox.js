import './CrossTabRowTotalBox.css'

function CrossTabRowTotalBox( props ) {
    return (
        <div className='cross-tab-total-box-container'>
            <h1 className='total-data-text'>{props.percentage}%</h1>
            <h1 className='total-data-text'>{props.value}</h1>
        </div>
    )
}

export default CrossTabRowTotalBox;