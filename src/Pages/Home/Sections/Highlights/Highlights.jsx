import React from 'react'
import style from './Highlights.module.css'

const Highlights = () => {
    return (
        <section>
            <h1 className={`${style.title}`}>Higlights</h1>
            <div className={`${style.highlightsContainer}`}>
                <div className={`${style.highlightItem}`}>
                    <h3 className={`${style.highlightTitle}`}>Toki</h3>
                    <p className={`${style.highlightDescription}`}>
                        Korean streetfood restaurant located in the heart of Aalst.
                    </p>
                </div>
                <div className={`${style.highlightItem}`}>
                    <h3 className={`${style.highlightTitle}`}>Hairelby</h3>
                    <p className={`${style.highlightDescription}`}>
                        Hair salon that is sadly out of business.
                    </p>
                </div>
                <div className={`${style.highlightItem}`}>
                    <h3 className={`${style.highlightTitle}`}>Aux Portes De Soi</h3>
                    <p className={`${style.highlightDescription}`}>
                        A place for personal development and clairvoyance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Highlights;