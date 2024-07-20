import './CrossTabColumnHeader.css'

function CrossTabColumnHeader( props ) {
    return (
        <div className='cross-tab-column-header-container'>
            <h1 className='column-header-text'>{props.label}</h1>
        </div>
    )
}

export default CrossTabColumnHeader;