import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Signup() {
    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorTxt, setErrorTxt] = useState('')
    const nav = useNavigate()

    function addUser(e) {
        e.preventDefault()
        const userInfo = {
            pseudo: pseudo,
            email: email,
            password: password,
        }

        //Utilisation de fetch pour faire appel à l'API lors de l'inscription
        fetch('http://localhost:5000/api/user/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.err) {
                    console.log(data.err);
                    setErrorTxt('Email ou mot de passe existant'
                    )
                } else {
                    console.log(data);
                    toLogin(userInfo)
                }
            })
            .catch((err) => console.log(err))
    }

    function toLogin(userInfo) {
        fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.err) {
                    console.log(data.err);
                } else {
                    if (data.adminId) localStorage.setItem('adminId', data.adminId)
                    if (data.userId) localStorage.setItem('userId', data.userId)
                    Cookies.set('token', data.token, { expires: 1, secure: true })
                    nav('/home');
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='home-page'>
            <div className='container-home'>
                <h1>Inscription</h1>
                <form onSubmit={addUser}>
                    <label>
                        <input
                            type="text"
                            name="pseudo"
                            placeholder="pseudo"
                            value={pseudo}
                            onChange={(e) => {
                                setPseudo(e.target.value)
                                setErrorTxt('')
                            }}
                            required
                        />
                    </label>

                    <label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setErrorTxt('')
                            }}
                            required
                        />
                    </label>

                    <label>
                        <input
                            type="password"
                            placeholder="mot de passe"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setErrorTxt('')
                            }}
                        />
                    </label>
                    <label>
                        <input type="submit" value="S'inscrire"></input>
                    </label>
                </form>
                <div>{errorTxt}</div>
                <Link to="/">Se connecter</Link>
            </div>
        </div>
    )
}