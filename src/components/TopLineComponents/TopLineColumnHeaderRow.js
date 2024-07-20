import './TopLineColumnHeaderRow.css'
import TopLineRowLabelBox from './TopLineRowLabelBox';
import TopLineColumnHeader from './TopLineColumnHeader';


function TopLineRow() {

    return (
        <div className='top-line-column-header-row-container'>
            <TopLineRowLabelBox value={'Response'} />
            <TopLineColumnHeader value={'Freq'}/>
            <TopLineColumnHeader value={'%'}/>
        </div>
    )
}

export default TopLineRow;