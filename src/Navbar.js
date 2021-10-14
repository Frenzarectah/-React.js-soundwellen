import React, { useState } from 'react';
import icon from './imgs/menu_ico.jpg';
import Artists from './artists';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{ 
    setIsOpen(!isOpen);
    var menu = document.getElementById("ico_mob");
    menu.classList.toggle("_rotate");
    var icon_desk = document.getElementById("menu_desk");
    icon_desk.classList.toggle("_rotate");
    var head = document.getElementsByClassName("nav-link");
    for (var el of head){
      el.classList.toggle("menu_appear");
    }
    /*var head = document.getElementsByClassName("nav-link");
    for (var el of head){
      el.classList+="menu_appear";
    }*/
  }
  return (
    <React.Fragment>
      <Navbar light expand="md">
        <Collapse isOpen={isOpen}  navbar>
          <Nav className="ml px-3" navbar>
            <NavItem>
            <NavLink href="/artists">ARTISTS</NavLink>             
            </NavItem>
            <NavItem>
              <NavLink href="#">SHOWS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>NEWS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>ABOUT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>CONTACTS</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <img src={icon} alt="mobile icon" className="icon" id="ico_mob" onClick={toggle}/>
      <img src={icon} alt="desktop icon" id="menu_desk" className="menu_desktop" onClick={toggle}/>        
      <Router>
      <Switch>
    <Route path='/artists' component={Artists}/>
      </Switch>
      </Router>
      </React.Fragment>
  );
}

export default Navi;