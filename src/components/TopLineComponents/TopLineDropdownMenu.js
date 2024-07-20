import './TopLineDropDownMenu.css'
import TopLineDropDown from './TopLineDropDown';
import React, {useState} from 'react'

const TopLineDropDownMenu = ( props ) => {

    const passTopLineDropDownSelectionToParent = (dropDownSelection) => {
        props.passTopDownDropDownSelectionToParent(dropDownSelection);
    }


    return (
        <div className='top_line_drop_down_menu_container'>
            <h1 className='top_line_drop_down_menu_header_text'>Select Question</h1>
            <TopLineDropDown options={props.options} passSelectionToParent={passTopLineDropDownSelectionToParent}/>
        </div>
    )
}

export default TopLineDropDownMenu;