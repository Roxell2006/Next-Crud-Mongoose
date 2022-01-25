import React,{useState, useEffect} from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {

    const [products, setProducts] = useState(null);

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/product`)
        .then(res => {
            setProducts(res.data.products);
            console.log(res.data.products);
        });
        setProducts(products)
    },[]);


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