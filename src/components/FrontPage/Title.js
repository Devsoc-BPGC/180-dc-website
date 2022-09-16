import classes from './Title.module.css'

const Title = () => {
    return (
        <div className={classes['title-div']}>
            <div className={classes['bits-title']}>
                --------BITS GOA--------
            </div>
            <div className={classes['dc-title']}>
                180 DEGREES CONSULTING
            </div>
            <div className={classes['sub-title']}>
                WORLDS LARGEST STUDENT CONSULTANCY
            </div>
            <button className={classes['btn']}>Client Form</button>
        </div>
    );
}

export default Title