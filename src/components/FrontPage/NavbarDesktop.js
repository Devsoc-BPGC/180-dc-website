import classes from './NavbarDesktop.module.css'

const NavbarDesktop = () => {
    return (
        <div className={classes.navbar}>
            <h1 className={classes['nav-logo']}>LOGO</h1>
            <div className={classes['nav-items']}>
                <div className={classes.dropdown}>
                    <a className={classes['nav-item']} href="/#home">Home</a> 
                </div>
                <div className={classes['dropdown']}>
                    <a className={classes['nav-item']}>About Us</a>
                    <div className={classes['dropdown-content']}>
                            <a href="/">Vision</a>
                            <a href="/#corec">Core capabilities</a>
                            <a href="/#mentors">Mentors</a>
                            <a href="/#gitws">Get in touch with us</a>
                    </div>
                </div>
                <div className={classes['dropdown']}>
                    <a className={classes['nav-item']}>Our Work</a>
                    <div className={classes['dropdown-content']}>
                            <a href="/ourWork">How we work</a>
                            <a href="#">Past projects</a>
                            <a href="#">Testimonials</a>
                    </div>
                </div>
                <div className={classes['dropdown']}>
                    <a className={classes['nav-item']}>Join Our Team</a>
                    <div className={classes['dropdown-content']}>
                            <a href="/joinOurTeam">What do we have for you?</a>
                            <a href="/joinOurTeam">What do we look for?</a>
                            <a href="/joinOurTeam">Recruitment Process</a>
                            <a href="/joinOurTeam">Apply now</a>
                    </div>
                </div>
                <div className={classes['dropdown']}>
                    <a className={classes['nav-item']}>Case Library</a>
                </div>
            </div>
        </div>
    );
}

export default NavbarDesktop;