import Login from '../components/auth/Login';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                <Login />
            </main>

            <Footer />
        </div>
    );
}