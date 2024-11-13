import React from 'react'
import style from './Highlights.module.css'
import CardsHighlights from '../../../../Components/Cards/Highlights/CardsHighlights'
import PROJECTS from '../../../../consts/PROJECTS.json'

const Highlights = () => {
    return (
        <section className={`${style.sectionHighlights}`}>
            <h1 className={`${style.title}`}>Project Higlights</h1>
            <div className={`${style.highlightsContainer}`}>
                {
                    Object.keys(PROJECTS).map((project, index) => (
                        <CardsHighlights key={index} title={project} />
                    ))
                }
            </div>
        </section >
    );
};

export default Highlights;