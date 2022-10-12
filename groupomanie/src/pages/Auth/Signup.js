import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { accountService } from '../../_services/account.service'

import './auth.scss';

const Signup = () => {

    let navigate = useNavigate()

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
        e.preventDefault()
        accountService.signup(credentials)
            .then(res => {
                accountService.saveToken(res.data.token)
                navigate('/admin')
            })
            .catch(error => console.log(error))
    }


    return (
        <form onSubmit={onSubmit}>
            <div className='group'>
                <label htmlFor='pseudo'>Pseudo</label>
                <input
                    type="text"
                    name='pseudo'
                    value={credentials.pseudo}
                    onChange={onChange}
                />
            </div>
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
                <button>Créer un compte</button>
            </div>
            <div className='group'>
                <p>Déjà inscrit ?</p>
                <Link to='/login'>Connectez vous !</Link>
            </div>
        </form >
    );
};

export default Signup;