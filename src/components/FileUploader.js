import React, { useState, useRef } from 'react'
import Papa from "papaparse"
import './FileUpload.css'


function FileUploader({ passToParent }) {

    const inputRef = useRef();

    const [file, setFile] = useState();
    const [parsedData, setParsedData] = useState([]);
    const [tableRows, setTableRows] = useState([]);
    const [values, setValues] = useState([]);

    const handleOnChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (file) {

            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: function (results) {
                    const rowsArray = [];
                    const valuesArray = [];

                    results.data.map((d) => {
                        rowsArray.push(Object.keys(d));
                        valuesArray.push(Object.values(d));
                    });

                    setParsedData(results.data);

                    setTableRows(rowsArray[0]);

                    setValues(valuesArray);

                    passToParent(rowsArray, valuesArray);
                },
            });

            inputRef.current.value = "";
        }

    };

    return (
        <div className='file_upload_container'>
            <form>
                <h1 className='header_text'>Upload a CSV File</h1>
                <input
                    type={"file"}
                    accept={".csv"}
                    onChange={handleOnChange}
                    ref={inputRef}
                    style={{ marginLeft: 10, marginTop: 6, color: 'rgb(143, 143, 233)', width: '53%', fontSize: 15, marginBottom: 10 }}
                />
                <button
                    onClick={(e) => {
                        handleOnSubmit(e);
                    }}
                    style={{ color: 'white', backgroundColor: 'rgb(63, 63, 163)', marginRight: 10, marginLeft: 30, fontSize: 15, padding: 8, borderRadius: '10px', borderColor: 'white', borderWidth: '1.3px', borderStyle: 'solid' }}
                >
                    Submit
                </button>
            </form>
            <br />
            <br />
            {/* Table */}
            {/*<table>
                <thead>
                    <tr>
                        {tableRows.map((rows, index) => {
                            return <th key={index}>{rows}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {values.map((value, index) => {
                        return (
                            <tr key={index}>
                                {value.map((val, i) => {
                                    return <td key={i}>{val}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
                </table> */}
        </div>
    )
}

export default FileUploader;