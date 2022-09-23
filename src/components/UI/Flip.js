import classes from './Flip.module.css'

const Flip = (props)=>{
    return (
        <div class={classes["flip-card"]}>
            <div class={classes["flip-card-inner"]}>
                <div class={classes["flip-card-front"]}>
                    <h1>LOGO</h1>
                </div>
                <div class={classes["flip-card-back"]}>
                    <h1>Company Name</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    );
}

export default Flip;