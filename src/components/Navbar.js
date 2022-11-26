import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/stat">Increment counter</NavLink></li>
				<li><NavLink to="/about">About</NavLink></li>
			</ul>
		</nav>
	);
};

export default Navbar;