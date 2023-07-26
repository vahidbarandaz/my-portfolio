import React from 'react';

//styles
import styles from "./Skills.module.css";

//icons
import {FiCheck} from "react-icons/fi";

const Skills = () => {
    return (
        <div className={styles.container}>
            <h3>Skills</h3>
            <div className={styles.lists}>
                <ul>
                    <li><FiCheck/> HTML - CSS</li>
                    <li><FiCheck/> JavaScript - ES6</li>
                    <li><FiCheck/> React.js</li>
                    <li><FiCheck/> Redux/Redux-toolkit</li>
                    <li><FiCheck/> Reack Hooks</li>
                    <li><FiCheck/> Context-Api</li>
                    <li><FiCheck/> Restful-Api</li>
                </ul>
                <ul>
                    <li><FiCheck/> BootStrap</li>
                    <li><FiCheck/> Git - GitHub</li>
                    <li><FiCheck/> SASS</li>
                    <li><FiCheck/> Responsive Design</li>
                    <li><FiCheck/> Proplem Solving</li>
                    <li><FiCheck/> Clean-code</li>
                    <li><FiCheck/> Agile-Scrum</li>
                
                </ul>
            </div>
        </div>
    );
};

export default Skills;