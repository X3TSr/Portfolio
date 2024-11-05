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
                    <h3 className={`${style.highlightTitle}`}>Webdesign</h3>
                    <p className={`${style.highlightDescription}`}>
                        I am a webdesigner with a passion for creating beautiful and functional websites.
                    </p>
                </div>
                <div className={`${style.highlightItem}`}>
                    <h3 className={`${style.highlightTitle}`}>Student</h3>
                    <p className={`${style.highlightDescription}`}>
                        I am a student with a passion for learning new things and improving my skills.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Highlights;