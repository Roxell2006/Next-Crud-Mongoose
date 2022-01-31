import React, { useState, useEffect } from 'react';
import styles from './ProductForm.module.css';

export default function ProductForm(props) {

    const [id, setId] = useState(props.data.id);
    const [name, setName] = useState(props.data.name);
    const [category, setCategory] = useState(props.data.category);
    const [filter, setFilter] = useState(props.data.filter);
    const [price, setPrice] = useState(props.data.price);
    const [nameButton, setNameButton] = useState('Sauvegarder');

    useEffect(()=>{
        setId(props.data.id);
        setName(props.data.name);
        setCategory(props.data.category);
        setFilter(props.data.filter);
        setPrice(props.data.price);

        if (props.data.id !== '' && props.data.id !== undefined)
            setNameButton("Modifier");
        else
            setNameButton("Sauvegarder");

    },[props]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = { _id: props.data._id, id, name, category, filter, price }
        props.next(data);   // renvois les données via la fonction props next
    }

    return(
        <div className={styles.wrapper}>    
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="id_field">ID</label>
                    <input type="text" id="id_field" className="form-control" value={id} onChange={(e) => setId(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="name_field">Name</label>
                    <input type="text" id="name_field" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="cat_field">Catégory</label>
                    <select id="cat_field" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} >
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                        <option value="Accessories">Accessories</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="filter_field">Filter</label>
                    <select id="filter_field" className="form-control" value={filter} onChange={(e) => setFilter(e.target.value)} >
                        <option value="top">top</option>
                        <option value="bottom">bottom</option>
                        <option value="jacket">jacket</option>
                        <option value="accessories">accessories</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price_field">Price</label>
                    <input type="text" id="price_field" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div><br/>

                <button id="login_button" type="submit" className="btn btn-block py-3 ">{nameButton}</button><br/>
            </form>
        </div>
    );
}