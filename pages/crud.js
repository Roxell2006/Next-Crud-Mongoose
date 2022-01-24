import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {

    return (
        <div className={styles.container}>
            <Header />
                
            <main className={styles.main}>
                <h1 className={styles.title}>Next-Crud-Mongoose</h1>
            </main>

            <Footer />
        </div>
    );
}