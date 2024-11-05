import React from 'react'
import style from './Highlights.module.css'
import CardsHighlights from '../../../../Components/Cards/Highlights/CardsHighlights'

const Highlights = () => {
    return (
        <section>
            <h1 className={`${style.title}`}>Project Higlights</h1>
            <div className={`${style.highlightsContainer}`}>
                <CardsHighlights title={'Toki'} description={'Korean streetfood restaurant located in the heart of Aalst.'} />
                <CardsHighlights title={'Hairelby'} description={'Hair salon that is sadly out of business.'} />
                <CardsHighlights title={'Aux Portes De Soi'} description={'A place for personal development and clairvoyance.'} />
            </div>
        </section >
    );
};

export default Highlights;