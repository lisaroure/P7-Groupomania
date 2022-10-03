import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { AppContext } from '../utils/context';
import logo from '../assets/logo.png'

export default function Header() {
    const { pseudoContext } = useContext(AppContext)
    const token = Cookies.get('token')
    const nav = useNavigate()

    function logout() {
        Cookies.remove('token')
        localStorage.clear()
        nav('/login')
        console.log({ message: 'logout' })
    }

    //JSX
    return (
        <div className="header">
            <Link to='/home'>
                <img
                    src={logo}
                    alt='Logo de Groupomania'
                    width={150}
                    height={140}
                />
            </Link>
            {
                token && (
                    <div className="user-card">
                        <h3>Bienvenue {pseudoContext} !</h3>
                        <Link to="/login" onClick={logout}>
                            Déconnexion
                        </Link>
                    </div>

                )
            }
        </div>
    )
}