import React from 'react'
import style from './HeroContainer.module.css'

const HeroContainer = () => {
    return (
        <div className={`${style.heroSContainer}`}>
            <div className={`${style.heroS} ${style.heroS1}`}></div>
            <div className={`${style.heroS} ${style.heroS2}`}></div>
            <div className={`${style.heroS} ${style.heroS3}`}></div>
        </div>
    );
};

export default HeroContainer;