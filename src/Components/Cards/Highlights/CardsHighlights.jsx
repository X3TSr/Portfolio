import React from 'react'
import style from './CardsHighlights.module.css'

const CardsHighlights = ({ title, description }) => {
    return (
        <div className={`${style.highlightItem}`}>
            <h3 className={`${style.highlightTitle}`}>{title}</h3>
            <p className={`${style.highlightDescription}`}>
                {description}
            </p>
            <img src={`images/cards/${title.toLowerCase()}/thumbnail.svg`} alt="" />
        </div>
    );
};

export default CardsHighlights;