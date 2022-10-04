import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from 'js-cookie';
import logo from '../assets/logo.png'

export default function Header() {
    const userData = useSelector((state) => state.userReducer)
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
            {token && (
                <div className="user-card">
                    <h5>Bienvenue {userData.pseudo} !</h5>
                    <Link to="/login" onClick={logout}>
                        Déconnexion
                    </Link>
                </div>

            )
            }
        </div>
    )
}