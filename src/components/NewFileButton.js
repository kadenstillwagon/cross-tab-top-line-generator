import './NewFileButton.css'

function NewFileButton({ handleNewFileClick }) {

    const handleOnClick = () => {
        handleNewFileClick(true);
    }

    return (
        <button className="new_file_button" onClick={handleOnClick}>
            New File
        </button>
    )
}

export default NewFileButton