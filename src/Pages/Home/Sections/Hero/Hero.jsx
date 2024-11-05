import React, { useEffect, useState } from 'react'
import style from './Hero.module.css'

const Hero = () => {

    const words = ['Webdeveloper', 'Webdesigner', 'Student', 'Creative']
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <section className={`${style.section}`}>
            <h1 className={`${style.welcome}`}>
                Hi, I'm Kylian Lenoir, a <span className={`${style.word}`}>{words[currentWordIndex]}</span>
            </h1>
            <div className={`${style.heroSContainer}`}>
                <div className={`${style.heroS} ${style.heroS1}`}></div>
                <div className={`${style.heroS} ${style.heroS2}`}></div>
                <div className={`${style.heroS} ${style.heroS3}`}></div>
            </div>
        </section>
    );
};

export default Hero;