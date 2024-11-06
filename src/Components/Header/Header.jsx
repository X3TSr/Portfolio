import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css'
import ROUTES from '../../consts/ROUTES';

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <img className={`${style.logo}`} src="Logo White.svg" alt="" />
            <nav>
                <Link to={ROUTES.home} className={location.pathname === ROUTES.home ? `${style.link} ${style.active}` : style.link}>Home</Link>
                <Link to={ROUTES.projects} className={location.pathname === ROUTES.projects ? `${style.link} ${style.active}` : style.link}>Projects</Link>
                <Link to={ROUTES.timeline} className={location.pathname === ROUTES.timeline ? `${style.link} ${style.active}` : style.link}>Timeline</Link>
                <Link to={ROUTES.contact} className={location.pathname === ROUTES.contact ? `${style.link} ${style.cta} ${style.active}` : `${style.link} ${style.cta}`}>Get in touch</Link>
            </nav>
        </header>
    );
};

export default Header;