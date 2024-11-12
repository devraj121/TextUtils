import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React from 'react'
import { Routes, Route } from 'react-router-dom';

function App() {
  const[alert,setAlert]=useState(null);
  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils"  />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
        <TextForm showAlert={showAlert} title="Enter text to analyze"/>
        </Route>
      </Switch>
      
    </div>
    </Router>
        
    </>
  );
}

export default App;
