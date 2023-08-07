import classes from './NavbarMobile.module.css'
import { useState } from 'react';
import hambergerIcon from '../../assets/hamberger.png'

const NavbarMobile = () => {

    const NavOpen = () => {
        return (
            <div className={classes['nav-items']}>
                <a href="/#home" className={classes['nav-item']}>Home</a>
                <a href="/#about-us" className={classes['nav-item']}>About Us</a>
                <a href="/ourWork" className={classes['nav-item']}>Our Work</a>
                <a href="/joinOurTeam" className={classes['nav-item']}>Join Our Team</a>
                <a className={classes['nav-item']}>Case Library</a>
                <a href="/#contact-us" className={classes['nav-item']}>Contact Us</a>
            </div>
        );
    }
    
    const [open,setOpen] = useState(false);

    const buttonClickHandler = () => {
        setOpen((state)=>{return !state})
    }

    return (
        <div className={classes['nav-outer']}>
            <div className={classes['nav-inner']}>
                <div>
                    <h1>LOGO</h1>
                </div>
                <div style={{textAlign:'right'}}>
                    <img src={hambergerIcon} style={{width:'10%'}} onClick={buttonClickHandler}></img>
                </div>
            </div>
            {open && <NavOpen />}
        </div>
    );
}

export default  NavbarMobile;