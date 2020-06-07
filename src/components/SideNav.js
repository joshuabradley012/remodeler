import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import useGlobalState from '../contexts/GlobalState';

const SideNav = ({ className }) => {
	let navLinks = useGlobalState().subNavLinks;
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

export default SideNav;
