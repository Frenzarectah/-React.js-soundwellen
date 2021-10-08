import React, { useState } from 'react';
import icon from './imgs/menu_ico.jpg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { ThemeProvider } from 'react-bootstrap';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{ 
    setIsOpen(!isOpen);
    var head = document.getElementsByTagName("a");
    for (var el of head){
      el.classList.toggle("menu_appear");
    }
  }
  return (
    <React.Fragment>
      <Navbar light expand="md">
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>ARTISTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>SHOWS</NavLink>
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
      <img src={icon} className="icon" id="ico_mob" onClick={toggle}/>
    </React.Fragment>
  );
}

export default Navi;