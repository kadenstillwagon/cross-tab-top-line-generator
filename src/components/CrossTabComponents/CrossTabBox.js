import './CrossTabBox.css'

function CrossTabBox( props ) {

    return (
        <div className='cross-tab-box-container'>
            <h1 className='data-text' style={{padding: "0.7vw"}}>{props.percentage}%</h1>
            <h1 className='data-text'>{props.value}</h1>
        </div>
    )
} 

export default CrossTabBox;