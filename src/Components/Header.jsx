import React from 'react'
import { Link } from 'react-router-dom';
import style from './Header.module.css'
import ROUTES from '../consts/ROUTES';

const Header = () => {
    return (
        <header>
            <img className={`${style.logo}`} src="Logo White.svg" alt="" />
            <nav>
                <Link path={ROUTES.home}>Home</Link>
                <Link>Projects</Link>
                <Link>Contact</Link>
            </nav>
        </header>
    );
};

export default Header;