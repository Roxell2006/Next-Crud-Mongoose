import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from './auth.module.css';

const Register = () => {

    const router = useRouter();
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const { name, email, password } = user;

    const [success, setSuccess] = useState(false) ;
    const [error, setError] = useState('') ;

    useEffect(() => {
        if (success)
            router.push('/login');
        if (error) 
            console.log(error) ;
    }, [success, error]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const userData = { name, email, password }
            const { data } = await axios.post('/api/auth/register', userData ) ;
            setSuccess(true);
            console.log('Data :' , data.message);
        }catch (er){
            setError(er);
        } 
    }     

    const onChange = async (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div className="container container-fluid">
            <div className={styles.wrapper}>
                <div>
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">Register</h1>

                        <div className="form-group">
                            <label htmlFor="name_field">Full Name</label>
                            <input
                                type="text"
                                id="name_field"
                                className="form-control"
                                name='name'
                                value={name}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                name='password'
                                value={password}
                                onChange={onChange}
                            />
                        </div><br/>
                        
                        <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                        >'REGISTER'</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;