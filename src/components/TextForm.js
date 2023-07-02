import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was here " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success", "Converted to UpperCase!");
    }
    const handleLoClick = () => {
        // console.log("UpperCase was here " + text);
        let newText1 = text.toLowerCase();
        setText(newText1);
        props.showAlert("success", "Converted to LowerCase!");
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("success", "Clear Text!");
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("success", "Copy Text!");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success", "Remove Extra Spaces!");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div>
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
                </div>
                <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p> {text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
