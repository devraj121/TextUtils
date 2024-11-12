import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // setText=("Text ENtrance"); right way to change state

  const handleOnchange = (event) => {
    console.log("onchange");
    setText(event.target.value);
    
  };
  const handleUp = () => {
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase..","Success")
   
  };
  const handleDown = () => {
    console.log("Lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase..","Success")

  };
  const listen = () => {
    const SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    props.showAlert("Success","Speaking..");
  };
  function countWords(text) {
    // Split the text by whitespace characters, including newlines and tabs
    const words = text.trim().split(/\s+/);
  
    // Filter out empty strings
    const filteredWords = words.filter(word => word.trim() !== '');
  
    return filteredWords.length;
  }
  let l=countWords(text);


  return (
    <>
      <h1>{props.title}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnchange}
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUp}>
          Convert to UpperCase
        </button>
        <button className="btn btn-secondary my-3 mx-2" onClick={handleDown}>
          Convert to LowerCase
        </button>
        <button className="btn btn-info my-3 mx-2" onClick={listen}>
          Listen Now
        </button>
        <h2 className="my-2">Your Text Summary</h2>
        
        <p>
          {l} words and {text.length} characters
        </p>
        <p>{0.008 * l} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
