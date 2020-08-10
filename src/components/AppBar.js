import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';
import MainNav from './MainNav';

const AppBar = () => (
  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Link className="navbar-brand" to="/">Remodeler</Link>
    <Navbar.Toggle aria-controls="nav toggle" />
    <Navbar.Collapse>
      <MainNav />
    </Navbar.Collapse>
  </Navbar>
);

export default AppBar;
