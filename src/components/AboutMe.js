import React from 'react';

//styels 
import styles from "./AboutMe.module.css";

import PersonalDetails from './shared/PersonalDetails';
import Skills from './shared/Skills';

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>About Me</h1>
            </div>
            <div className={styles.information}>
                <Skills />
                <PersonalDetails />
            </div>
        </div>
    );
};

export default AboutMe;