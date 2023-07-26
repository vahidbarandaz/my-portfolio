import React from 'react';

//Styles
import styles from "./Project.module.css";

//folder icon
import folderIcon from "../../images/folder.png";

const Project = ({github, demo, title}) => {
    return (
        <div className={styles.container}>
            <div className={styles.folderContainer}>
                <img src={folderIcon} alt="icon"/>
                <p>{title}</p>
            </div>
            <div className={styles.btnContainer}>
                <a target="_blank" rel='noreferrer' href={github}>GitHub</a>
                <a target="_blank" rel='noreferrer' href={demo}>Live Demo</a>
            </div>
        </div>
    );
};

export default Project;