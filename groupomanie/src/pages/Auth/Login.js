import React, { useState } from 'react';
import './auth.scss';

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('form');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='group'>
                <label htmlFor='login'>Identifiant</label>
                <input
                    type="text"
                    name='login'
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
            </div>
            <div className='group'>
                <label htmlFor='password'>Mot de passe</label>
                <input
                    type="text"
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className='group'>
                <button>Connexion</button>
            </div>

        </form>
    );
};

export default Login;