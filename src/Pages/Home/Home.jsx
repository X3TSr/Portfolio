import React from 'react'
import style from './Home.module.css'
import Hero from './Sections/Hero/Hero'
import Highlights from './Sections/Highlights/Highlights'
import Story from './Sections/Story/Story'

const Home = () => {

    return (
        <main>
            <Hero />
            <Highlights />
            <Story />
        </main>
    );
};

export default Home;