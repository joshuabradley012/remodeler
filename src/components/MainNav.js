import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import useGlobalState from '../contexts/GlobalState';

const MainNav = ({ className }) => {
  let navLinks = useGlobalState().result.navLinks;
  return (
    <Nav className={className}>
      {navLinks.map((item, i) => (
        <NavLink className="nav-link" to={item.path} key={i}>
          {item.name}
        </NavLink>
      ))}
    </Nav>
  );
};

export default MainNav;
