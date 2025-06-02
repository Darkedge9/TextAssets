import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text cleared", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'light' ? '#063450' : 'white' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : '#063450',
              color: props.mode === 'light' ? '#063450' : 'white'
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy Text</button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'light' ? '#063450' : 'white' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes to read</p>
        <h2>Preview</h2>  
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview here"}</p>
      </div>
    </>
  );
}
