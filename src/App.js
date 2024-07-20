import './App.css';
import {useState} from 'react';
import FileUploader from './components/FileUploader';
import TopBar from './components/TopBar';
import DropDownMenu from './components/CrossTabComponents/DropDownMenu';
import CrossTab from './components/CrossTabComponents/CrossTab';
import TopLineCrossTabSelection from './components/TopLineCrossTabSelection';
import TopLineDropDownMenu from './components/TopLineComponents/TopLineDropdownMenu';
import TopLine from './components/TopLineComponents/TopLine'

function App() {

  document.body.style = 'background: rgb(31, 31, 31)'

  const [rowsArray, setRowsArray] = useState([]);
  const [values, setValues] = useState([]);
  const [fileUploadVisible, setFileUploadVisible] = useState(true);

  const [dropDownOneSelection, setDropDownOneSelection] = useState('Select Question');
  const [dropDownTwoSelection, setDropDownTwoSelection] = useState('Select Question');

  const [lineTabSelected, setLineTabSelected] = useState('Tab');

  const [topLineDropDownSelection, setTopLineDropDownSelection] = useState('Select Question');


  const passFileDataToParent = (rowsArray, values) => {
    
    setRowsArray(rowsArray);
    setValues(values);
    console.log(rowsArray[0]);
    // console.log(values);

    setFileUploadVisible(false);
  }

  const handleNewFileClick = () => {
    setFileUploadVisible(true);
    setDropDownOneSelection('Select Question');
    setDropDownTwoSelection('Select Question');
    setTopLineDropDownSelection('Select Question');
    setLineTabSelected('Tab');
  }

  const passDropDownOneSelectionToParent = (DropDownOneSelection) => {
    setDropDownOneSelection(DropDownOneSelection);
  }

  const passDropDownTwoSelectionToParent = (DropDownTwoSelection) => {
    setDropDownTwoSelection(DropDownTwoSelection);
  }

  const handleLineTabSelection = (lineTabSelection) => {
    setLineTabSelected(lineTabSelection);
    setDropDownOneSelection('Select Question');
    setDropDownTwoSelection('Select Question');
    setTopLineDropDownSelection('Select Question');
  }

  const passTopDownDropDownSelectionToParent = (topLineDropDownSelection) => {
    setTopLineDropDownSelection(topLineDropDownSelection);
  }
  

  if (fileUploadVisible) {
    return (
      <div className="App">
        <TopBar />
        <FileUploader passToParent={passFileDataToParent}/>
      </div>
    );
  } else {
    return (
        <div className="App">
          <TopBar handleNewFileClick={handleNewFileClick}/>
          <TopLineCrossTabSelection handleLineTabSelection={handleLineTabSelection}/>
          {(lineTabSelected == 'Tab') 
            ? <div> 
                <DropDownMenu 
                  options={rowsArray[0]}
                  passDropDownOneSelectionToParent={passDropDownOneSelectionToParent}
                  passDropDownTwoSelectionToParent={passDropDownTwoSelectionToParent}
                />

                {(dropDownOneSelection != 'Select Question' && dropDownTwoSelection != 'Select Question')
                  ? <CrossTab rowsArray={rowsArray} values={values} selectionOne={dropDownOneSelection} selectionTwo={dropDownTwoSelection}/> : <div />
                }
              </div>
            :
              <div>
                <TopLineDropDownMenu 
                  options={rowsArray[0]}
                  passTopDownDropDownSelectionToParent={passTopDownDropDownSelectionToParent}
                />
                {(topLineDropDownSelection != 'Select Question')
                  ? <TopLine rowsArray={rowsArray} values={values} selectedQuestion={topLineDropDownSelection} /> : <div />
                }
              </div>
            
          }
          
        </div>
      );
  }

  
}

export default App;


