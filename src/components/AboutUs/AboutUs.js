import classes from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={classes['about-us']}>
            <div className={classes['cards']}>
                <div className={classes.card}>
                    <h2>Consultants</h2>
                    <h2 className={classes['card-data']}>25</h2>
                </div>
                <div className={classes.card}>
                    <h2>Projects</h2>
                    <h2 className={classes['card-data']}>11</h2>
                </div>
                <div className={classes.card}>
                    <h2>Lives Touched</h2>
                    <h2 className={classes['card-data']}>25K+</h2>
                </div>
                <div className={classes.card}>
                    <h2>Since</h2>
                    <h2 className={classes['card-data']}>2018</h2>
                </div>
            </div>
            <div className={classes['description']}>
                <h1>
                    ABOUT US
                </h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <button>Read More</button>
            </div>
        </div>
    );
}

export default AboutUs;