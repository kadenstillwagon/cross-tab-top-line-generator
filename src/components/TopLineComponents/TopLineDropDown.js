import './TopLineDropDown.css'
import React, {useState} from 'react';


const TopLineDropDown = ( props ) => {
    const [buttonText, setButtonText] = useState("Select Question");
    const [dropDownVisible, setDropDownVisible] = useState(false);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);

    const options = props.options.slice(2)

    const handleOnClick = () => {
        setDropDownVisible(!dropDownVisible);
    }

    const onSelection = (event, index) => {
        setSelectedOptionIndex(index);
        setButtonText(options[index]);
        props.passSelectionToParent(options[index]);
    }

    if (dropDownVisible) {
        return (
            <div className='top_line_drop_down_container'>
                <button 
                    onClick={handleOnClick}
                    style={{color: 'black', backgroundColor: 'white', fontSize: 'min(1.5vw, 15px)', padding: 'min(1vw, 8px)', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderColor: 'black', borderWidth: '2px', borderStyle: 'solid', width: '14vw'}}
                >
                    {buttonText}
                </button>
                <div className='top_line_options_box'>
                    {options.map((optionText, index) => {
                        return (
                            <button
                                style={{
                                    color: (index == selectedOptionIndex) ? 'white' : 'black', 
                                    backgroundColor: (index == selectedOptionIndex) ? 'black' : 'white', 
                                    fontSize: 'min(1.5vw, 15px)',
                                    padding: 'min(1vw, 8px)', 
                                    borderColor: (index == selectedOptionIndex) ? 'white' : 'black', 
                                    borderWidth: '1px', 
                                    borderStyle: 'solid', 
                                    width: '14vw',
                                    opacity: 0.75
                                }}
                                onClick={e => onSelection(e, index)}
                            >
                                {optionText}
                            </button>
                        );
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div className='top_line_drop_down_container'>
                <button 
                    onClick={handleOnClick}
                    style={{color: 'black', backgroundColor: 'rgb(232, 232, 232)', fontSize: 'min(1.5vw, 15px)', marginBottom: '2px', padding: 'min(1vw, 8px)', borderRadius: '10px', borderColor: 'black', borderWidth: '2px', borderStyle: 'solid', width: '14vw'}}
                >
                    {buttonText}
                </button>
            </div>
        )
    }

    
}

export default TopLineDropDown;