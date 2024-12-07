import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let NewText=text.toUpperCase();
        setText(NewText)
    }

    const handleLowClick=()=>{
      let NewText=text.toLowerCase();
      setText(NewText)
  }

    const handleOnChange=(event)=>{
       // console.log("On Change");
        setText(event.target.value);
    }
    const[text, setText]= useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
    <div className='container my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read the above paragraph</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
