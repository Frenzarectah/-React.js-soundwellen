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

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  expand="md">
      <NavbarToggler className="icon" onClick={toggle}>{icon}</NavbarToggler>
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
    </div>
  );
}

export default Navi;
