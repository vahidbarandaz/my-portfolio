import React from 'react';

//styles
import styles from "./ContactInfo.module.css";

//icons
import {MdOutlineMail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";

//components
import Contact from './shared/Contact';
import SendMessage from './shared/SendMessage';

const ContactInfo = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.infoContainer}>
                <div>
                    <h1>Contact Me</h1>
                </div>
                <div>
                    <Contact 
                        icon={<MdOutlineMail/>} 
                        title="E-mail" 
                        content="vahidbarandaz@yahoo.com" 
                        link="vahidbarandaz@yahoo.com"
                        buttonTitle="Send E-mail"
                    />
                    <Contact 
                        icon={<BsWhatsapp/>} 
                        title="WhatsApp" 
                        content="+9364098836" 
                        link="https://wa.me/+989364098836/?text=urlencodedtext"
                        buttonTitle="Send Message"
                    />
                </div>
            </div>
            <SendMessage />
        </div>
    );
};

export default ContactInfo;