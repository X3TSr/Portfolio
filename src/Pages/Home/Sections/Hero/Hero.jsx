import React, { useEffect, useState } from 'react'
import style from './Hero.module.css'
import HeroContainer from '../../../../Components/HeroContainer/HeroContainer'

const Hero = () => {

    const words = [
        'Webdeveloper',
        'Webdesigner',
        'Student',
        'Creative',
        '3D Artist',
        'Frontend Developer',
        'Backend Developer',
        'Fullstack Developer',
        'UI/UX Designer',
        'Graphic Designer',
        'Digital Artist',
        'Problem Solver',
        'Tech Enthusiast',
        'Gamer',
        'Dreamer',
        'Thinker',
        'Doer',
        'Maker'
    ]
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