import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/welcome-page"> Welcome Page </NavLink>
            <NavLink to="/characters"> Characters </NavLink>
            <NavLink to="/locations">Locations</NavLink>
        </nav>
    );
};

export default Navigation;