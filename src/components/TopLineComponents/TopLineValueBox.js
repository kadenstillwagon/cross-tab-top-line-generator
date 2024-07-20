import './TopLineValueBox.css'

function TopLineValueBox( props ) {
    return (
        <div className='top-line-box-container'>
            <h1 className='data-text'>{props.value}</h1>
        </div>
    )
} 

export default TopLineValueBox;