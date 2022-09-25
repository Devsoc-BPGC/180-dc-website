import classes from './Case.module.css'

const Case = (props) => {
    return (
    <div className={classes['case']}>
        <h1 className={classes['case-title']}>{props.title}</h1>
        <div className={classes['case-inner']}>
            <div className={classes['case-logo']}>
                <h1>LOGO</h1>
            </div>
            <div className={classes['case-desc']}>
                {props.children}
            </div>
        </div>
    </div>
    );
}

export default Case;