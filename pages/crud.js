import {useState, useEffect} from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import ProductForm from '../components/ProductForm';
import styles from '../styles/Home.module.css';

// fonction qui indiquera quel requête envoyer
let fonction = '';

export default function CrudPage() {

    // contiendra le contenu de la bdd
    const [products, setProducts] = useState(null);

    // State pour la fenêtre modale
    const [modal, setModal] = useState(false);              // Active ou désactive
    const [title, setTitle] = useState('Modal Title');      // Titre de la fenêtre
    const [productData, setProductData] = useState({});     // valeur des champs du formulaire

    useEffect(()=>{
        // Lit la base de donnée au chargement de la page
        readProductHandler();
    },[]);

    //Création du tableau
    const tableProducts = () => {
        const data = {
            columns: [
                { label: 'Product ID', field: 'id', sort: 'asc' },
                { label: 'Name', field: 'name', sort: 'asc' },
                { label: 'Catégory', field: 'category', sort: 'asc' },
                { label: 'Filter', field: 'filter', sort: 'asc' },
                { label: 'Price', field: 'price', sort: 'asc' },
                { label: 'Actions', field: 'actions' }
            ],rows: []
        }

        products && products.forEach(product => {
            data.rows.push({
                id: product.id,
                name: product.name,
                category: product.category,
                filter: product.filter,
                price: product.price + ' €',
                actions:
                    <>
                        <button className="btn btn-primary mx-2" onClick={() => updateProductHandler(product)}>
                            <i className="fa fa-pencil-alt"></i>
                        </button>

                        <button className="btn btn-danger mx-2" onClick={() => deleteProductHandler(product)}>
                            <i className="fa fa-trash-alt"></i>
                        </button>
                    </>
            })
        })
        return data;
    }

    // Fonctions C.R.U.D
    const createProductHandler = ()=> {
        fonction = 'create';
        setProductData({_id: '', id: '', name: '', category: 'Men', filter: 'top', price: ''});
        setTitle("Ajout");
        setModal(true);
    }

    const readProductHandler = ()=>{
        fonction = 'read';
        requeteBdd();
    }
    
    const updateProductHandler = (item)=> {
        fonction = 'update';
        setProductData(item);
        setTitle("Modification");
        setModal(true);
    }

    const deleteProductHandler = (item) => {
        fonction = 'delete';
        requeteBdd(item);  
    }

    // requètes C.R.U.D. sur la BDD
    const requeteBdd = async (item)=> {
        setModal(false);

        if(fonction === 'create'){
            Reflect.deleteProperty(item, '_id');
            await axios.post(`/api/product`, item);
            readProductHandler();
        }
        else if(fonction === 'read'){
            const {data} = await axios.get(`/api/product`);
            setProducts(data.products);
        }
        else if(fonction === 'update'){
            await axios.put(`/api/product/${item._id}`, item);
            readProductHandler();
        }
        else if(fonction === 'delete'){
            await axios.delete(`/api/product/${item._id}`);
            readProductHandler();
        }
    }

    return (
        <div >
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Next-Crud-Mongoose</h1>
                
                <MDBDataTable data={tableProducts()} bordered striped hover />

                <button className="btn btn-primary" onClick={createProductHandler}>Ajout</button>

                <Modal show={modal} title={title} next={()=>{setModal(false);}}>
                    <ProductForm show={modal} data={productData} next={(item)=>{requeteBdd(item)}}/>
                </Modal>
            </main>
            <Footer />
        </div>
    );
}