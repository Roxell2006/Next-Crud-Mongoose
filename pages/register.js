import Register from '../components/auth/Register';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function RegisterPage() {
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                <Register />
            </main>

            <Footer />
        </div>
    );
}