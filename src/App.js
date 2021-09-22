import logo from './imgs/logo_nowrite.jpg';
import './App.css';
//import funct from './script.js';
import Subtitle from './Subtitle';
import { Component } from 'react';
import Navbar from './Navbar';
function App(){
  function changePage(){
    var logo = document.getElementById("soundwellen");
    logo.className="slideAway";
  }
  return (
    <div className="App">
          <div className="head"><Navbar menu1="home" menu2="contatti" menu3="djs"/></div>
          <a href="#" onClick={changePage} className="sound">
            <img src={logo} className="logo" alt="logo" id="soundwellen" />
          </a>
          <Subtitle />
    </div>
  );
}

export default App;
