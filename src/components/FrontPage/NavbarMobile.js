import classes from './NavbarMobile.module.css'
import { useState } from 'react';
import hambergerIcon from '../../assets/hamberger.png'

const NavbarMobile = () => {

    const NavOpen = () => {
        return (
            <div className={classes['nav-items']}>
                <h2 className={classes['nav-item']}>Home</h2>
                <h2 className={classes['nav-item']}>About Us</h2>
                <h2 className={classes['nav-item']}>Our Work</h2>
                <h2 className={classes['nav-item']}>Work With Us</h2>
                <h2 className={classes['nav-item']}>Blogs</h2>
                <h2 className={classes['nav-item']}>Join Our Team</h2>
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