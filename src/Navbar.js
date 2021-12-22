import React, { useState } from 'react';
import icon from './imgs/menu_ico.jpg';
import Home from './Home';
import './Navbar.css';
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
    setTimeout(setIsOpen(!isOpen),1500);
    var menu = document.getElementById("ico_mob");
    menu.classList.toggle("_rotate");
    var head = document.querySelectorAll(".nav-link");
    head.forEach(function(el){
      el.classList.toggle("menu_appear");
    });
  }
  return (
    <React.Fragment>
      <Navbar light expand="md" fixed="top">
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml px-3" navbar>
            <NavItem>
              <NavLink className="delete" onClick={toggle}>X</NavLink>
            </NavItem> 
            <NavItem>
            <NavLink  href="/home">ARTISTS</NavLink>             
            </NavItem>
            <NavItem>
              <NavLink href="/home">SHOWS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/home">NEWS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/home">ABOUT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/home">CONTACTS</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <img src={icon} alt="mobile icon" className="icon" id="ico_mob" onClick={toggle}/>             
      </Navbar>
      <Router>
      <Switch>
      <Route strict path="/home" render={() => <Home />} />
      </Switch>
      </Router>
      </React.Fragment>
  );
}
export default Navi;
