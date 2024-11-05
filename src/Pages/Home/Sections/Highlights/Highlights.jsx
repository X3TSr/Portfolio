import React from 'react'
import style from './Highlights.module.css'
import CardsHighlights from '../../../../Components/Cards/Highlights/CardsHighlights'

const Highlights = () => {
    return (
        <section className={`${style.sectionHighlights}`}>
            <h1 className={`${style.title}`}>Project Higlights</h1>
            <div className={`${style.highlightsContainer}`}>
                <CardsHighlights title={'Toki'} />
                <CardsHighlights title={'Hairelby'} />
                <CardsHighlights title={'Aux Portes De Soi'} />
            </div>
        </section >
    );
};

export default Highlights;