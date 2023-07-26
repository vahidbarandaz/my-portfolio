import React from 'react';
import { Link } from "react-router-dom";

//styles
import styles from "./Navbar.module.css";
import styled from 'styled-components';

const Div = styled.div `
    @media (max-width: 768px) {
        transition: all .3s linear;
        transform: ${props => props.menu ? "translate(0)" : "translate(+250px)"};
    }
`

const Navbar = ({menu}) => {
    return (
        <Div menu={menu} className={styles.container}>
            <Link to="/">Home</Link>
            <ul>
                <li><Link to="/aboutme">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contactinfo">Contact Info</Link></li>
            </ul>
        </Div>
    );
};

export default Navbar;