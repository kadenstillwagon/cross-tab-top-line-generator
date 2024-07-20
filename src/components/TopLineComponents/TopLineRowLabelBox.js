import './TopLineRowLabelBox.css'

function TopLineRowLabelBox( props ) {
    return (
        <div className='top-line-row-header-container'>
            <h1 className='header-text'>{props.value}</h1>
        </div>
    )
}

export default TopLineRowLabelBox;