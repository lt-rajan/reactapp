import React, { useState } from 'react'
import Navbar from './Navbar'

export default function TextForm(props) {
    const [text, setText]=useState("set text from const")

    // text("new txt");
    // setText=("converted text");

    const handleOnChange =(event)=>{      
      setText(event.target.value)
    }
    const handleUpClick =()=>{      
      let newText=text.toUpperCase();
      setText(newText)
    }
    const handleLoClick =()=>{      
      let newText=text.toLowerCase();
      setText(newText)
    }

  return (  
    <>
    <Navbar title={'HOME'}/>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to lowercase</button>
    </div>
    <div className='container'>
      <h1>your text summary</h1>
      <p>number of character = {text.length}</p>
      <p>number of words = {text.split(" ").length}</p>
      <h3>PREVIEW</h3>
      <p>{text}</p>

    </div>
    </>  

  )
}
