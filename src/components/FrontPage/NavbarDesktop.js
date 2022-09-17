import classes from './NavbarDesktop.module.css'
import { useState } from 'react';

const NavbarDesktop = () => {

    const [drop,setDrop] = useState(false)

    const TestDropdown = () => {
        return (<div className={classes.dropdown}>
            <h2>Hello World</h2>
            <h2>World</h2>
        </div>);
    }

    const changeDrop = () => {
        setDrop(state => {return !state})
    }

    return (
        <div className={classes.navbar}>
            <h1 className={classes['nav-logo']}>LOGO</h1>
            <div className={classes['nav-items']}>
                <div onMouseEnter={changeDrop} onMouseLeave={changeDrop} className={classes['nav-item']}>
                    <h2>Home</h2>
                    {drop && <TestDropdown />}
                </div>
                <h2 className={classes['nav-item']}>About Us</h2>
                <h2 className={classes['nav-item']}>Our Work</h2>
                <h2 className={classes['nav-item']}>Work With Us</h2>
                <h2 className={classes['nav-item']}>Blogs</h2>
                <h2 className={classes['nav-item']}>Join Our Team</h2>
            </div>
        </div>
    );
}

export default NavbarDesktop;