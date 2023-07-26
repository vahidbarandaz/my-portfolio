import React from 'react';
import { Link } from "react-router-dom";

//styles
import styles from "./Hero.module.css";

//images
import heroImage from "../../images/hero.jpg";

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1>Vahid Barandaz</h1>
                <h2>Junior Front-End Developer</h2>
                <Link to="/projects">Go to Projects</Link>
            </div>
            <img src={heroImage} alt="Hero"/>

        </div>
    );
};

export default Hero;