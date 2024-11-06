import React from 'react'
import { Link } from 'react-router-dom';
import style from './Footer.module.css'
import ROUTES from '../../consts/ROUTES';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className={`${style.links}`}>
                <img src="Logo White.png" alt="logo" />
                <Link to={ROUTES.home}>Home</Link>
                <Link to={ROUTES.projects}>Projects</Link>
                <Link to={ROUTES.timeline}>Timeline</Link>
                <Link to={ROUTES.contact}>Contact</Link>
            </div>
            <hr className={style.divider} />
            <div className={style.socials}>
                <a href="https://www.linkedin.com/in/kylian-lenoir-791462253" target="_blank">
                    <img src="images/socials/linkedin.png" alt="linkedin" />
                </a>
                <a href="https://www.instagram.com/x3tsr_/" target="_blank">
                    <img src="images/socials/instagram.png" alt="instagram" />
                </a>
            </div>
            &copy; {year} - Kylian Lenoir - All rights reserved.
        </footer>
    );
};

export default Footer;