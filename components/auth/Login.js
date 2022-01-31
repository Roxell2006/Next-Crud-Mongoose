import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import styles from './auth.module.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password
        });

        if (result.error) {
            console.log(result.error);
        } else {
            window.location.href = '/'
        }
    }

    return (
        <div className="container container-fluid">
            <div className={styles.wrapper}>    
                <form className="shadow-lg" onSubmit={submitHandler}>
                    <h1 className="mb-3">Login</h1>
                    <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button id="login_button" type="submit" className="btn btn-block py-3" 
                    >LOGIN</button><br/>
               
                    <Link href="/register"><a className={styles.floatright}>New User ?</a></Link>
                </form>
            </div>
        </div>
    )

}

export default Login
