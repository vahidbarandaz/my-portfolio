import React from 'react';

//styles
import styles from "./Contact.module.css";

const Contact = ({icon, title, content, link, buttonTitle}) => {
    return (
        <div className={styles.container}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.title}>{title}</span>
            <p>{content}</p>
            <a href={link} target="_blanck">{buttonTitle}</a>
        </div>
    );
};

export default Contact;