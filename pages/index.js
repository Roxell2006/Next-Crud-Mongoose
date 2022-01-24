import Header from '../components/Header';
import Footer from '../components/Footer';
import {useRouter} from "next/router";
import styles from '../styles/Home.module.css';

export default function Home() {

  const router = useRouter();

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Next-Crud-Mongoose</h1>
        <button className={styles.bouton} onClick={()=>{router.push('/crud')}}>Start</button>
      </main>

      <Footer />
    </div>
  )
}
