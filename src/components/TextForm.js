import React, { useState } from 'react';
import OpenAI from 'openai';

// Move this outside the component function
export default function TextForm(props) {
  const [text, setText] = useState('');
  const [summarizedText, setSummary] = useState('');

  function upperText() {
    setText(text.toUpperCase());
  }

  function lowerText() {
    setText(text.toLocaleLowerCase());
  }

  function clearText() {
    setText('');
  }

  function handleInputChange(event) {
    setText(event.target.value);
  }

  async function showSummary() {
    try {
      const openai = new OpenAI({apiKey: "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", dangerouslyAllowBrowser: true});
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'system', content: `Summarize this text ${text}` }],
        model: 'gpt-3.5-turbo',
      });

      const content = completion.choices[0].message.content;
      setSummary(content);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  }

  return (
    <div className="mx-5">
      <div className="p-3 mx-4">
        <p>Enter the text here: </p>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleInputChange}
          style={{ backgroundColor: props.color }}
        />
      </div>
      <div className="p-3 mx-3 mb-5">
        <button onClick={upperText} type="button" className={`btn btn-${props.but} mx-3 my-3`}>
          Upper Text
        </button>
        <button onClick={lowerText} type="button" className={`btn btn-${props.but} mx-3 my-3`}>
          Lower Text
        </button>
        <button onClick={clearText} type="button" className={`btn btn-${props.but} mx-3 my-3`}>
          Clear Text
        </button>
      </div>
      <div className="mx-5 pb-3">
        <h1>Word Count</h1>
        <p>{text === '' ? 0 : text.split(' ').length} words, {text.length} letters</p>
      </div>
      <div className="mx-5 pb-3">
        <h1>Time Required</h1>
        <p>{text === '' ? 0 : (text.split(' ').length * 0.004).toFixed(2)} minutes</p>
      </div>
      <div className="mx-5">
        <h1>Preview</h1>
        <p>{text === '' ? 'Enter text to Preview' : text}</p>
      </div>
      <div className="p-3 mx-4">
        <button onClick={showSummary} type="button" className={`btn btn-${props.but} mb-3`}>
          Summarize
        </button>
        <p>{summarizedText}</p>
      </div>
    </div>
  );
}
