import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [summarizedText, setSummary] = useState("This is a summary text");

  function upperText() {
    setText(text.toUpperCase());
  }
  function lowerText() {
    setText(text.toLocaleLowerCase());
  }
  function clearText() {
    setText("");
  }

  function handleInputChange(event) {
    setText(event.target.value);
  }

  function showSummary(){
    setSummary("Summary is Changed");
  }

  return (
    <div className='mx-5'>
      <div className="p-3 mx-4">
        <p>Enter the text here: </p>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleInputChange} // Add the onChange event handler
          style={{backgroundColor:props.color}}
        />
        </div>
        <div className="p-3 mx-3 mb-5">  
        <button onClick={upperText} type="button" class={`btn btn-${props.but} mx-3`}>Upper Text</button>
        <button onClick={lowerText} type="button" class={`btn btn-${props.but} mx-3`}>Lower Text</button>
        <button onClick={clearText} type="button" class={`btn btn-${props.but} mx-3`}>Clear Text</button>
        </div>
        <div className="mx-5 pb-3">
        <h1>Word Count</h1>
        <p>{text === ""?0:text.split(" ").length} words, {text.length} letters</p>
        </div>
        <div className='mx-5 pb-3'>
        <h1>Time Required</h1>
        <p>{text === ""?0:text.split(" ").length*0.004} minutes</p>
        </div>
        <div className='mx-5'>
            <h1>Preview</h1>
            <p>
                {text === ""?"Enter text to Preview":text}
            </p>
        </div>
        <div className='p-3 mx-4'>
        <button onClick={showSummary} type="button" class={`btn btn-${props.but} mb-3`}>Summarize</button>
        <p>{summarizedText}</p>
        </div>
    </div>
  );
}
