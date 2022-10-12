import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { accountService } from '../../_services/account.service'

import './auth.scss';

const Login = () => {
    let navigate = useNavigate()

    // initialisation du state
    const [credentials, setCredentials] = useState({
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
        e.preventDefault()
        accountService.login(credentials)
            .then(res => {
                accountService.saveToken(res.data.token)
                navigate('/Accueil')
            })
            .catch(error => console.log(error))
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>Connexion</h3>
            <div className='group'>
                <label htmlFor='email'>Adresse e-mail</label>
                <input
                    type="text"
                    name='email'
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
            <div className='group'>
                <p>Pas de compte ?</p>
                <Link to='/auth/signup'>Inscrivez vous !</Link>
            </div>
        </form>
    );
};

export default Login;