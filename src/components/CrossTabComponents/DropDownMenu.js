import './DropDownMenu.css'
import DropDown from './DropDown';
import React, {useState} from 'react'

const DropDownMenu = ( props ) => {

    const passDDoneToParent = (dropDownOneSelection) => {
        props.passDropDownOneSelectionToParent(dropDownOneSelection);
    }

    const passDDtwoToParent = (dropDownTwoSelection) => {
        props.passDropDownTwoSelectionToParent(dropDownTwoSelection);
    }


    return (
        <div className='drop_down_menu_container'>
            <h1 className='drop_down_menu_header_text'>Select Two Questions</h1>
            <div className='drop_down_row'>
                <DropDown options={props.options} passDownDropDownSelectionToParent={passDDoneToParent}/>
                <DropDown options={props.options} passDownDropDownSelectionToParent={passDDtwoToParent}/>
            </div>
        </div>
    )
}

export default DropDownMenu;