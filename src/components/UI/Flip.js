import classes from './Flip.module.css'

const Flip = (props)=>{
    return (
        <div className={classes["flip-card"]}>
            <div className={classes["flip-card-inner"]}>
                <div className={classes["flip-card-front"]}>
                    <h1>LOGO</h1>
                </div>
                <div className={classes["flip-card-back"]}>
                    <h1>Company Name</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    );
}

export default Flip;