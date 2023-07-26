import React, {useState} from 'react';

//import styles
import styles from "./SendMessage.module.css";

const SendMessage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const nameHandler = event => setName(event.target.value);
    const emailHandler = event => setEmail(event.target.value);
    
    return (
        <form className={styles.container}>
            <input type="text" value={name} onChange={nameHandler} required placeholder='Full Name'/>
            <input type="email" value={email} onChange={emailHandler} required placeholder='Enter Your E-mail'/>
            <textarea name='message' rows="7" placeholder="Enter Your Message" required/>
            <button type='submit'>Send</button>
        </form>
    );
};

export default SendMessage;