import React, { useState } from 'react';


export default function TextEditor(props) {
    const [text, setText] = useState("");

    const chng = () => {
        console.log("clear text")
        setText("")
    }
    const handleOn = (event) => {
        console.log("Delete occuring")
        setText(event.target.value)
    }
    const cap = () => {
        console.log("update text")
        let ut = text.toUpperCase()
        setText(ut)
    }
    const sm = () => {
        console.log("update text")
        let ut = text.toLowerCase()
        setText(ut)
    }
    return (<>
        <div className="container">
            <h1>{props.name}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOn} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-danger mx-2" onClick={chng}>Clear</button>
            <button type="button" className="btn btn-success mx-2" onClick={cap}>Capital letters</button>
            <button type="button" className="btn btn-primary mx-2" onClick={sm}>Small letters</button>


        </div>
        <div className="container">
            <h1>Total Summary</h1>
            Total words :{text.length}
            <br />
            Total character :{text.split(" ").length-1}

        </div>
    </>

    )
}


