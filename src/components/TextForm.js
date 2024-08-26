import React, { useState } from 'react';


export default function TextForm(props) {
    function onClickHandle (event) {
        event.preventDefault();
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("success", "Uppercase  is on");
    }
    
    function onClickLower(event) {
        event.preventDefault();
        let newText = text.split(' ')
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                          .join(' ');
        setText(newText);  
        props.showAlert("success", "First letter is capitalized");
    }
    function onChange(event) {
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <h1 className="mx-5">{props.heading}</h1>
    <div className="container">
    <form>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={onChange}></textarea>
  </div>
  <button className="btn btn-primary mt-3" onClick={onClickHandle}>Convert to Uppercase</button>
  <button className="btn btn-primary mt-3 ms-2" onClick={onClickLower}>First letter capitalize</button>
</form>
</div>
    </>
  )
}