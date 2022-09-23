import classes from './Clients.module.css'
import Flip from '../UI/Flip';

const Clients = () => {
    return (
        <div className={classes['clients']}>
            <div className={classes.line}></div>
            <div className={classes['client-title']}>
                <p>FOR CLIENTS</p>
                <h1>We greatly value our clients.</h1>
                <h1>Hear what they have to say for us.</h1>
            </div>
            <div className={classes['cards']}>
                <div className={classes['card-row']}>
                    <Flip />
                    <Flip />
                    <Flip />
                </div>
                <div className={classes['card-row']}>
                    <Flip />
                    <Flip />
                    <Flip />
                </div>
            </div>
        </div>  
    );
}

export default Clients;