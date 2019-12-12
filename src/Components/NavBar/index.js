import React from 'react';
import { NavBarCont, NavLinks, Logo, Inner } from './styles';
import logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <NavBarCont>
            <Inner>
                <Logo src={logo} alt={logo} />
                <NavLinks>
                    <Link to='/about'>about</Link>
                    <Link to='/guides'>guides</Link>
                    <Link to='/recipes'>recipes</Link>
                </NavLinks>
            </Inner>
        </NavBarCont>
    );
}

export default NavBar;
