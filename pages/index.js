import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useRouter} from "next/router";
import styles from '../styles/Home.module.css';
import { getSession } from 'next-auth/react';

export default function Home(props) {

  const router = useRouter();

  React.useEffect(async() => {
    const session = await getSession();
    console.log('session: ' + JSON.stringify(session));
    console.log('name: ' + session.user.name);
    console.log('email: ' + session.user.email);
    console.log('Connecté: ' + !!session);
  }, [getSession]); //Add session state to the useEffect

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

export async function getServerSideProps(context) {

  const session = await getSession({ req: context.req })
  console.log('session is: ' + JSON.stringify(session));
  
  //if (!session || session.user.role !== 'admin') {
  if(!session){  
      return {
          redirect: {
              destination: '/login',
              permanent: false
          }
      }
  }
  
  return {
      props: {session}
  }
}

