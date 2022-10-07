import React from 'react';
import './auth.scss';

const Login = () => {
    return (
        <form>
            <div className='group'>
                <label htmlFor='login'>Identifiant</label>
                <input type="text" name='login' />
            </div>
            <div className='group'>
                <label htmlFor='password'>Mot de passe</label>
                <input type="text" name='password' />
            </div>
            <div className='group'>
                <button>Connexion</button>
            </div>

        </form>
    );
};

export default Login;