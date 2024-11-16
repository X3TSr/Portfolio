import React, { useEffect, useState } from 'react'
import style from './Hero.module.css'
import HeroContainer from '../../../../Components/HeroContainer/HeroContainer'

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
        <section className={`${style.sectionHero}`}>
            <h1 className={`${style.welcome}`}>
                Hi, I'm Kylian Lenoir<br /> A <span className={`${style.word}`}>{words[currentWordIndex]}</span>
            </h1>
            <HeroContainer />
        </section>
    );
};

export default Hero;