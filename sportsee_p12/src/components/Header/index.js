import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import './index.css';

function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className='header__logo' src={logo} alt="Logo sport see" />
            </Link>
            <nav className='header__navbar'>
                <ul className='header__nav'>
                    <li className='header__navItem'>
                        <NavLink className="header__navLink">
                            Accueil
                        </NavLink>
                    </li>
                    <li className='header__navItem'>
                        <NavLink className="header__navLink">
                            Profil
                        </NavLink>
                    </li>
                    <li className='header__navItem'>
                        <NavLink className="header__navLink">
                            Réglage
                        </NavLink>
                    </li>
                    <li className='header__navItem'>
                        <NavLink className="header__navLink">
                            Communauté
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;