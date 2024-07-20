import './CrossTabRowHeader.css'

function CrossTabRowHeader( props ) {
    return (
        <div className='cross-tab-row-header-container'>
            <h1 className='header-text'>{props.value}</h1>
        </div>
    )
}

export default CrossTabRowHeader;