import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const nav = useNavigate()

    function addUser(e) {
        e.preventDefault()
        const userInfo = {
            email: email,
            password: password,
        }

        fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message) {
                    console.log(data)
                    setError('Login ou mot de passe incorrect')
                } else {
                    console.log({ message: 'Login' })
                    if (data.adminId) localStorage.setItem('adminId', data.adminId)
                    if (data.userId) localStorage.setItem('userId', data.userId)
                    Cookies.set('token', data.token, { expire: 1, secure: true })
                    nav('/home');
                }
            })
    }

    return (
        <div className='home-page'>
            <div className='container-home'>
                <h1>Connexion</h1>
                <form onSubmit={addUser}>
                    <label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setError('')
                            }}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            minLength={5}
                            placeholder="mot de passe"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setError('')
                            }}
                        />
                    </label>
                    <input type="submit" value="Se connecter" />
                </form>
                <error>{error}</error>
                <Link to="/signup">Créer un compte</Link>
            </div>
        </div>
    )
}