import logo from './imgs/logo_nowrite.jpg';
import './App.css';
import Subtitle from './Subtitle';
import {Collapse, Navbar, NavbarBrand, NavbarToggler, NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from './imgs/menu_ico.jpg';
import Novbar from './Navbar';
import DropdownToggle from '@restart/ui/esm/DropdownToggle';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
function App(){
  function changePage(){
    var logo = document.getElementById("soundwellen");
    var sub = document.getElementsByClassName("subtitle")[0];
    var sound = document.getElementsByClassName("sound")[0];
    logo.className="slideAway";
    sub.className="slideAway";
    var icon = document.getElementById("ico");
    icon.className+=" _fadeIn";
    /*};*/
  }
  var openMenu=()=>{
    var menu = document.getElementById("ico");
    menu.classList.toggle("_rotate");
    var head = document.getElementById("list");
    head.classList.toggle("menu_appear");
 }
    return (
    <div className="App">
          <div className="head">
            <Navbar expand="md">
              <NavLink>ARTISTS</NavLink>
              <NavLink>SHOWS</NavLink>
              <NavLink>NEWS</NavLink>
              <NavLink>ABOUT US</NavLink>
              <NavLink>CONTACTS</NavLink>
              <NavbarToggler src="{icon}" onClick={()=> alert("cliccato su toggle!")}></NavbarToggler>
            </Navbar>
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
//<Novbar collapseOnSelect expand="lg" menu1="ARTISTS" menu2="SHOWS" menu3="NEWS" menu4="ABOUT US" menu5="CONTACTS"/>