import './TopBar.css'
import NewFileButton from './NewFileButton';

function TopBar({ handleNewFileClick }) {
    return (
        <div className="top_bar_container">
            <h1 className='top_bar_header_text'>Cross Tab Generator</h1>
            <NewFileButton handleNewFileClick={handleNewFileClick} />
        </div>
    )
}

export default TopBar;