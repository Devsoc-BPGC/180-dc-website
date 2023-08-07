import React from 'react';
import classes from './ContactUs.module.css'

const ContactUs = () => {
    return (
        <div className={classes.bg} id="gitws">
            <div className={classes['contact-us']} id="contact-us">
                <div className={classes['contact']}>
                    <h1>Contact</h1>
                    <h2>
                        180Degrees Consulting,
                        <br />
                        Bits Pilani Goa Campus,
                        <br />
                        Verna,Goa,India.
                        <br />
                        <br />
                        General Queries: <a>link@goa.bits-pilani.com</a>
                        <br />
                        <br />
                        <br />
                        <br />
                        180DC Intenational:<br />
                        <a href='www.180dc.org'>www.180dc.org</a>
                    </h2>
                </div>
                <div className={classes['get-in-touch']}>
                    <h1>Get In Touch With Us</h1>
                    <form className={classes.form}>
                        <h3>Name</h3>
                        <input type="text" />
                        <h3>Email</h3>
                        <input type="text" />
                        <h3>Message</h3>
                        <input type="text" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs