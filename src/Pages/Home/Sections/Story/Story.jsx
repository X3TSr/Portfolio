import React from 'react'
import style from './Story.module.css'

const Story = () => {
    return (
        <section className={style.sectionStory}>
            <div className={style.story__container}>
                <h2 className={style.story__title}>My Story</h2>
                <p className={style.story__text}>
                    When I was around 16, I started exploring web development and design,
                    drawn in by the idea of creating something both functional and visually appealing.
                    It began with simple sites, but I quickly got hooked,
                    moving on to more complex projects as I learned how each line of code could
                    shape a visitor's experience. Now, it’s more than just a skill, it’s a passion.
                    I love how web development combines creativity and problem-solving,
                    and every new project feels like an opportunity to refine my skills,
                    learn something fresh, and make something meaningful.
                </p>
            </div>
        </section>
    );
};

export default Story;