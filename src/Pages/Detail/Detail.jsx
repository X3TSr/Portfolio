import React from 'react'
import style from './Detail.module.css'
import { useParams } from 'react-router-dom';
import PROJECTS from '../../consts/PROJECTS.json'

const Detail = () => {

    const { title } = useParams();
    const project = PROJECTS[title.toLowerCase()];

    return (
        <section className={`${style.sectionDetail}`}>
            <h1 className={`${style.title}`}>Project: <span className={`${style.dark}`}>{`${title[0].toUpperCase()}${title.slice(1)}`}</span></h1>
            <p className={`${style.description}`}>{project.description}</p>
            {
                project.active &&
                <a target='_blank' href={project.link} className={`${style.projectLink}`}>Visit '{project.title}'</a>
            }
            <div className={`${style.images}`}>
                {
                    Array.from({ length: project.images }).map((_, index) => (
                        <img key={index} alt={title} className={`${style.image}`} src={`/images/projects/${project.title.toLowerCase()}/${index + 1}.svg`} />
                    ))
                }
            </div>
        </section>
    );
};

export default Detail;