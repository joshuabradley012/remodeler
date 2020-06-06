import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const navLinks = [
	{ name: 'Projects', path: '/projects' },
	{ name: 'Jobs', path: '/jobs' },
	{ name: 'Status', path: '/status' },
];

const MainNav = ({ className }) => (
	<Nav className={className}>
		{navLinks.map((item, i) => (
			<NavLink className="nav-link" to={item.path} key={i}>
				{item.name}
			</NavLink>
		))}
	</Nav>
);

export default MainNav;
