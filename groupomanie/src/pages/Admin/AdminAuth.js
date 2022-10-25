import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../../_services/account.service'

import '../Auth/auth.scss';

const AdminAuth = () => {
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
        e.preventDefault(credentials)
            .then(res => {
                console.log(res)
                accountService.saveToken(res.data.access_token)
                navigate('/admin')
            })
            .catch(error => console.log(error))
    }

    return (

        <form onSubmit={onSubmit}>
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
        </form>
    );
}

export default AdminAuth;