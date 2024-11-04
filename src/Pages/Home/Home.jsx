import React from 'react'
import style from './Home.module.css'

const Home = () => {
    return (
        <div className={`${style.welcome}`}>
            Hi, I'm <span>Kylian Lenoir</span>
            a <span>Web Developer</span>
        </div>
    );
};

export default Home;