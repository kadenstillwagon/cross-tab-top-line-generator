import './CrossTabBox.css'

function CrossTabBox( props ) {

    return (
        <div className='cross-tab-box-container'>
            <h1 className='cross-tab-box-data-text' >{props.percentage}%</h1>
            <h1 className='cross-tab-box-data-text' >{props.value}</h1>
        </div>
    )
} 

export default CrossTabBox;