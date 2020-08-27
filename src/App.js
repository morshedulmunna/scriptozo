import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Bodyone from './Components/Body1/Bodyone';
import Course from './Components/Course/Course';


function App() {
 
    return (
      <div className="container">
        <Header></Header>
        <Bodyone></Bodyone>
        <Course></Course>
      </div>
    );
  } 
export default App;
