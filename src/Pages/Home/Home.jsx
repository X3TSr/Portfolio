import React from 'react'
import style from './Home.module.css'
import Hero from './Sections/Hero/Hero'
import Highlights from './Sections/Highlights/Highlights'

const Home = () => {

    return (
        <main>
            <Hero />
            <Highlights />
        </main>
    );
};

export default Home;