import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { AppContext } from './AppContext';
import logo from '../assets/logo.png'

export default function Header() {
    const { pseudoContext } = useContext(AppContext)
    const token = Cookies.get('token')
    const nav = useNavigate()

    function logout() {
        Cookies.remove('token')
        localStorage.clear()
        nav('/')
        console.log({ message: 'logout' })
    }

    //JSX
    return (
        <div className="header">
            <img
                src={logo}
                alt='Logo de Groupomania'
                width={50}
                height={40}
            />
            {
                token && (
                    <div className="user-card">
                        <h3>Bienvenue {pseudoContext} !</h3>
                        <Link to="/" onClick={logout}>
                            Déconnexion
                        </Link>
                    </div>

                )
            }
        </div>
    )
}