import React from 'react'
import style from './Detail.module.css'
import { useParams } from 'react-router-dom';

const Detail = () => {

    const { title } = useParams();

    return (
        <section className={`${style.sectionDetail}`}>
            <h1 className={`${style.title}`}>Project: <span className={`${style.dark}`}>{`${title[0].toUpperCase()}${title.slice(1)}`}</span></h1>
        </section>
    );
};

export default Detail;