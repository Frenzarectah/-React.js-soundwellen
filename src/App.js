import logo from './imgs/logo_nowrite.jpg';
import './App.css';
import Navi from './Navbar.js';
import Subtitle from './Subtitle';
import {Collapse, Navbar, NavbarBrand, NavbarToggler, NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from './imgs/menu_ico.jpg';
function App(){
  function changePage(){
    var logo = document.getElementById("soundwellen");
    var sub = document.getElementsByClassName("subtitle")[0];
    logo.className="slideAway";
    sub.className="slideAway";
    var icon = document.getElementById("ico_mob");
    var icon_desk = document.getElementById("menu_desk");
    icon_desk.className+=" _fadeIn";
    icon.className+=" _fadeIn";
  }
  var openMenu=()=>{
    var menu = document.getElementById("ico_mob");
    menu.classList.toggle("_rotate");
    var icon_desk = document.getElementById("menu_desk");
    icon_desk.classList.toggle("_rotate");
    var head = document.getElementsByTagName("a");
    for (var el of head){
      el.classList.toggle("menu_appear");
    }
 }
    return (
    <div className="App">
          <div className="head">
            <Navi/>
          </div>
          <a href="#" className="sound">
            <img src={logo} className="logo" alt="logo" id="soundwellen" onClick={changePage} />
          </a>
          <Subtitle />
          <NavbarToggler><img src={icon} className="icon" id="ico_mob" onClick={openMenu}/></NavbarToggler>
          <img src={icon}  id="menu_desk" className="menu_desktop" onClick={openMenu}/>
    </div>
  );
}

export default App;
/*<Novbar collapseOnSelect expand="lg" menu1="ARTISTS" menu2="SHOWS" menu3="NEWS" menu4="ABOUT US" menu5="CONTACTS"/>
<Navbar expand="md">
            <Collapse Navbar>
              <NavLink>ARTISTS</NavLink>
              <NavLink>SHOWS</NavLink>
              <NavLink>NEWS</NavLink>
              <NavLink>ABOUT US</NavLink>
              <NavLink>CONTACTS</NavLink>
            </Collapse>
              <NavbarToggler><img src={icon} className="icon" id="ico_mob" onClick={openMenu}/></NavbarToggler>
              <img src={icon}  id="menu_desk" className="menu_desktop" onClick={openMenu}/>
            </Navbar>*/