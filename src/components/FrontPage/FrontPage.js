import styles from './FrontPage.module.css'
import Navbar from './Navbar';
import Title from './Title';

const FrontPage = () => {
    return (
        <div className={styles['front-page']} id="home">
            <Navbar />
            <Title />
        </div>
    );
}

export default FrontPage;