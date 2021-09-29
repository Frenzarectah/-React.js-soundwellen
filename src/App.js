import logo from './imgs/logo_nowrite.jpg';
import './App.css';
import Subtitle from './Subtitle';
import icon from './imgs/menu_ico.jpg';
import Navbar from './Navbar';
function App(){
  function changePage(){
    var logo = document.getElementById("soundwellen");
    var sub = document.getElementsByClassName("subtitle")[0];
    logo.className="slideAway";
    sub.className="slideAway";
    var icon = document.getElementById("ico");
    /*if(icon.classList.contains("_fadeIn")===false){*/
    icon.className+=" _fadeIn";
    /*};*/
  }
  var openMenu=()=>{
    var menu = document.getElementById("ico");
    menu.classList.add("_rotate");
    var head = document.getElementById("list");
    head.className+="head_in";
 }
    return (
    <div className="App">
          <div className="head">
            <Navbar menu1="Our DJ's" menu2="Events" menu3="Contact"/>
            <img src={icon} className="icon" id="ico" onClick={openMenu}/>
          </div>
          <a href="#" className="sound">
            <img src={logo} className="logo" alt="logo" id="soundwellen" onClick={changePage} />
          </a>
          <Subtitle />
    </div>
  );
}

export default App;
