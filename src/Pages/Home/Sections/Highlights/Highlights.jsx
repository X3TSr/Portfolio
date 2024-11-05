import React from 'react'
import style from './Highlights.module.css'

const Highlights = () => {
    return (
        <section>
            <h2 className={`${style.title}`}>Highlights</h2>
            <div className={`${style.highlights}`}>
                <div className={`${style.highlight}`}>
                    <h3>Webdevelopment</h3>
                    <p>
                        I am a webdeveloper with a passion for creating beautiful and functional websites.
                    </p>
                </div>
                <div className={`${style.highlight}`}>
                    <h3>Webdesign</h3>
                    <p>
                        I am a webdesigner with a passion for creating beautiful and functional websites.
                    </p>
                </div>
                <div className={`${style.highlight}`}>
                    <h3>Student</h3>
                    <p>
                        I am a student with a passion for learning new things and improving my skills.
                    </p>
                </div>
                <div className={`${style.highlight}`}>
                    <h3>Creative</h3>
                    <p>
                        I am a creative person with a passion for creating new things and solving problems.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Highlights;