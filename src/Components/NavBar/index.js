import React from 'react';
import { NavBarCont, NavLinks, Logo } from './styles';
import logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <NavBarCont>
            <Logo src={logo} alt={logo} />
            <NavLinks>
                <Link to='/about'>about</Link>
                <Link to='/guides'>guides</Link>
                <Link to='/recipes'>recipes</Link>
            </NavLinks>
        </NavBarCont>
    );
}

export default NavBar;
