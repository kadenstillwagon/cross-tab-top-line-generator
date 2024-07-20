import './TopLineColumnHeader.css'

function TopLineColumnHeader( props ) {
    return (
        <div className='top-line-column-header-container'>
            <h1 className='top-line-column-header-data-text'>{props.value}</h1>
        </div>
    )
} 

export default TopLineColumnHeader;