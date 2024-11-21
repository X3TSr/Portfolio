import React from 'react'
import style from './Projects.module.css'
import PROJECTS from '../../consts/PROJECTS.json'
import CardsHighlights from '../../Components/Cards/Highlights/CardsHighlights';

const Projects = () => {
    return (
        <section className={`${style.sectionProjects}`}>
            <h1 className={`${style.title}`}>My Projects</h1>

            <div className={style.projects}>
                {
                    Object.keys(PROJECTS).map((project, index) => {
                        return (
                            <CardsHighlights key={index} title={project} />
                        )
                    })
                }
            </div >
        </section>
    );
};

export default Projects;