import Case from './Case';
import classes from './Casses.module.css'


const Lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const Title = "Lorem ipsum dolor, consectetur adipiscing"

const Casses = () => {
    return (
        <div className={classes.casses}>
            <h1 className={classes['casses-title']}>Top <span style={{color:'#7DCE13'}}>Cases</span></h1>
            <Case title={Title}><p>{Lorem}</p><p>{Lorem}</p></Case>
            <Case title={Title}><p>{Lorem}</p><p>{Lorem}</p></Case>
        </div>
    );
}

export default Casses;