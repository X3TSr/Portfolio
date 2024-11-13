import React from 'react'
import style from './Projects.module.css'
import PROJECTS from '../../consts/PROJECTS.json'

const Projects = () => {
    return (
        <section className={`${style.sectionProjects}`}>
            <h1>My Projects</h1>

            <div className={style.projects}>
                {
                    Object.keys(PROJECTS).map((project, index) => {
                        return (
                            <img key={index} src={PROJECTS[project].thumbnail} alt={PROJECTS[project].title} />
                        )
                    })
                }
            </div >
        </section>
    );
};

export default Projects;