import React from 'react'
import style from './Detail.module.css'
import { useParams } from 'react-router-dom';
import PROJECTS from '../../consts/PROJECTS.json'

const Detail = () => {

    const { title } = useParams();

    return (
        <section className={`${style.sectionDetail}`}>
            <h1 className={`${style.title}`}>Project: <span className={`${style.dark}`}>{`${title[0].toUpperCase()}${title.slice(1)}`}</span></h1>
            <p className={`${style.description}`}>{PROJECTS[title.toLowerCase()].description}</p>
            <div className={`${style.images}`}>
                {
                    PROJECTS[title.toLowerCase()].images.map((image, index) => (
                        <img key={index} src={image} alt={title} className={`${style.image}`} />
                    ))
                }
            </div>
        </section>
    );
};

export default Detail;