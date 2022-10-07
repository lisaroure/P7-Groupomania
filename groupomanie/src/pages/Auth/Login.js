import React, { useState } from 'react';
import './auth.scss';

const Login = () => {
    // initialisation du state
    const [credentials, setCredentials] = useState({
        pseudo: '',
        email: '',
        password: ''
    })
    //passer par l'état précédent pour modifier les champs input
    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    //déclenchement du formulaire
    const onSubmit = (e) => {
        e.preventDefault(credentials)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='group'>
                <label htmlFor='pseudo'>Pseudo</label>
                <input
                    type="text"
                    name='pseudo'
                    id='pseudo'
                    value={credentials.pseudo}
                    onChange={onChange}
                />
                <label htmlFor='email'>Adresse e-mail</label>
                <input
                    type="text"
                    name='email'
                    id='email'
                    value={credentials.email}
                    onChange={onChange}
                />
            </div>
            <div className='group'>
                <label htmlFor='password'>Mot de passe</label>
                <input
                    type="text"
                    name='password'
                    value={credentials.password}
                    onChange={onChange}
                />
            </div>
            <div className='group'>
                <button>Connexion</button>
            </div>

        </form>
    );
};

export default Login;