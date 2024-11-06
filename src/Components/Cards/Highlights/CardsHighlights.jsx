import React from 'react'
import style from './CardsHighlights.module.css'
import { Link } from 'react-router-dom'

const CardsHighlights = ({ title }) => {
    return (
        <Link to={`/project/${title.toLowerCase()}`}>
            <div className={`${style.highlightItem}`}>
                <img className={`${style.highlightImage}`} src={`images/cards/${title.toLowerCase()}/thumbnail.svg`} alt="" />
            </div>
        </Link>
    );
};

export default CardsHighlights;