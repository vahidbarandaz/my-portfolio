import React from 'react';
//styles
import styles from "./PersonalDetails.module.css";

//Icons
import  {AiFillGithub} from "react-icons/ai"

const PersonalDetails = () => {
    return (
        <div className={styles.container}>
            <p className={styles.desc}>I'm a Junior Front-End Developer seeking a position in a company so That I can use my skills to help my colleagues and do what I love to do : <span className={styles.fav}>Coding</span></p>
            <p className={styles.open}>Open to Remote & Onsight Job Positions</p>
            <p><AiFillGithub/>GitHub Repositories: <span className={styles.link}>https://github.com/vahidbarandaz?tab=repositories</span></p>
        </div>
    );
};

export default PersonalDetails;