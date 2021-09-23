import logo from './imgs/logo_nowrite.jpg';
import './App.css';
import Subtitle from './Subtitle';
import icon from './imgs/menu_ico.jpg';
import Navbar from './Navbar';
function App(){
  function changePage(){
    var logo = document.getElementById("soundwellen");
    logo.className="slideAway";
  }
  function fadIn(){
    var icon = document.querySelector(".icon");
    icon.className+="_fadeIn";
  }
  return (
    <div className="App">
          <img src={icon} className="icon" onClick={fadIn}/>
          <div className="head"><Navbar menu1="home" menu2="contatti" menu3="djs"/></div>
          <a href="#" onClick={changePage} className="sound">
            <img src={logo} className="logo" alt="logo" id="soundwellen" />
          </a>
          <Subtitle />
    </div>
  );
}

export default App;
