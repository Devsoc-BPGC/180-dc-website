import classes from './Clients.module.css'
import Flip from '../UI/Flip';

const Clients = () => {
    return (
        <div className={classes['clients']}>
            <div className={classes['client-title']}>
                <h1>For Clients</h1>
                <p>We Greatly value our clients. Hear what they have to say for us.</p>
            </div>
            <div className={classes['card']}>
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