// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextEditor from './Components/TextEditor';
import React, { useState } from 'react';
import Alert from './Components/Alert';


function App() {
  const [Mode, ChangeMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const ShowAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=>{

      setAlert(null)
    },3000)
  }
  const ModeSet = () => {

    console.log("Hey")
    if (Mode === 'dark') {
      ChangeMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      ShowAlert("Light colourhas been enabled","Success")
      
    }
    else {

      ChangeMode("dark")
      document.body.style.backgroundColor = 'grey'
      document.body.style.color = 'White'
       ShowAlert("Dark colourhas been enabled","Success")
    }

  }

  const ShowGreenColour=()=>{
    if (Mode === 'dark') {
      ChangeMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      ShowAlert("Light colourhas been enabled","Success")
      
    }
    else {

      ChangeMode("dark")
      document.body.style.backgroundColor = 'green'
      document.body.style.color = 'White'
       ShowAlert("Dark colourhas been enabled","Success")
    }
  }
  
  const ShowBlueColour=()=>{
    if (Mode === 'dark') {
      ChangeMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      ShowAlert("Light colourhas been enabled","Success")
      
    }
    else {

      ChangeMode("dark")
      document.body.style.backgroundColor = 'Blue'
      document.body.style.color = 'White'
       ShowAlert("Dark colourhas been enabled","Success")
    }


  }
  return (
    <>
      <Navbar title="Text Analyzer" mode={Mode} handle={ModeSet} secondMode={ShowGreenColour} thirdMode={ShowBlueColour}/>
      <Alert alert={alert} />

      <div className="container">
        <TextEditor name="ENTER TEXT ...." />
      </div>
    </>
  );
}

export default App;
