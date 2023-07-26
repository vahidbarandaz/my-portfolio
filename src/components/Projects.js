import React from 'react';

//Styles
import styles from "./Projects.module.css";

//Components
import Project from './shared/Project';

const Projects = () => {
    return (
        <>
            <h2 className={styles.title}>Explore Projetcs Here</h2>
            <div className={styles.container}>
                <Project
                    github="https://github.com/vahidbarandaz/react-shope-app.git"
                    demo="https://vahidbarandaz.github.io/react-shope-app/"
                    title="Shopping Cart"
                />
                <Project
                    github="https://github.com/vahidbarandaz/weather.jsx.git"
                    demo="https://vahidbarandaz.github.io/weather.jsx/"
                    title="Weather Forecast"
                />
                <Project
                    github="https://github.com/vahidbarandaz/crypto-app.git"
                    demo="https://vahidbarandaz.github.io/crypto-app/"
                    title="Digital Currency"
                />
                <Project
                    github="https://github.com/vahidbarandaz/form-registeration.git"
                    demo="https://vahidbarandaz.github.io/form-registeration/"
                    title="Sign UP/Login Form"
                />
        
            </div>
        </>
    );
};

export default Projects;