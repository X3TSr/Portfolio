import React from 'react'
import style from './Projects.module.css'
import PROJECTS from '../../consts/PROJECTS.json'

const Projects = () => {
    return (
        <section className={`${style.sectionProjects}`}>
            <h1 className={`${style.title}`}>My Projects</h1>

            <div className={style.projects}>
                {
                    Object.keys(PROJECTS).map((project, index) => {
                        return (
                            <a href={`/project/${PROJECTS[project].title}`}><img key={index} src={PROJECTS[project].thumbnail} alt={PROJECTS[project].title} /></a>
                        )
                    })
                }
            </div >
        </section>
    );
};

export default Projects;