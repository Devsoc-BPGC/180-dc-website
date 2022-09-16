import classes from './NavbarDesktop.module.css'

const NavbarDesktop = () => {
    return (
        <div className={classes.navbar}>
            <h1 className={classes['nav-logo']}>LOGO</h1>
            <div className={classes['nav-items']}>
                <h2 className={classes['nav-item']}>Home</h2>
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