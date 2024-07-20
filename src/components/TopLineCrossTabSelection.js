import './TopLineCrossTabSelection.css'
import { useState } from 'react'

function TopLineCrossTabSelection(props) {
    const [selected, setSelected] = useState('Cross Tabs')

    const handleOnTabClick = () => {
        setSelected('Cross Tabs')
        props.handleLineTabSelection('Tab')
    }

    const handleOnLineClick = () => {
        setSelected('Top Lines')
        props.handleLineTabSelection('Line')
    }

    return (
        <div className='tl-ct-selection-container'>
            <button
                style={{
                    fontSize: 'min(1.6vw, 17px)', 
                    padding: 'min(1.1vw, 9px)', 
                    width: 'min(14vw, 150px)',
                    borderWidth: 0,
                    borderRadius: '15px',
                    backgroundColor: (selected == 'Cross Tabs') ? 'black' : 'white',
                    color: (selected == 'Cross Tabs') ? 'white' : 'black'
                }}
                
                onClick={handleOnTabClick}
                >
                Cross Tabs
            </button>

            <button
                style={{
                    fontSize: 'min(1.6vw, 17px)', 
                    padding: 'min(1.1vw, 9px)', 
                    width: 'min(14vw, 150px)',
                    borderWidth: 0,
                    borderRadius: '15px',
                    backgroundColor: (selected == 'Top Lines') ? 'black' : 'white',
                    color: (selected == 'Top Lines') ? 'white' : 'black'
                }}
                
                onClick={handleOnLineClick}
                >
                Top Lines
            </button>
        </div>
    )
}

export default TopLineCrossTabSelection