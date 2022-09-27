import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import Cookies from 'js-cookie';
import Card from '../components/Card';
import FormHome from '../components/FormHome';
import logo from '../assets/logo.png'


export default function Home() {
    const { setPseudoContext } = useContext(AppContext)

    const userId = localStorage.getItem('userId')
    const adminId = localStorage.getItem('adminId')
    const token = Cookies.get('token')
    const [dataPost, setDataPost] = useState([])
    const [getUser, setGetUser] = useState(true)
    const [getPost, setGetPost] = useState(true)
    const nav = useNavigate();

    //Utilisation de useEffect pour afficher les données selon le profil connecté
    useEffect(() => {
        if (userId && token) callApiUser(token, userId)
        if (adminId && token) callApiAdmin(token, adminId)
        if (!token) return
    }, [token, userId, adminId])

    useEffect(() => {
        if (!token) return
        callApiPosts(token)
    }, [token])

    useEffect(() => {
        if ((!userId || !token) && (!adminId || !token)) nav('/')
    }, [token, userId, adminId, nav])

    function callApiUser(token, userId) {
        setGetUser(true)
        fetch(`http://localhost:3000/api/user${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setPseudoContext(data.pseudo)
                setGetUser(false)
            })
            .catch(() => {
                console.log({ message: 'URL invalide.' });
            })
    }
    function callApiAdmin(token, adminId) {
        setGetUser(true)
        fetch(`http://localhost:3000/api/user/admin${adminId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setPseudoContext(data.pseudo)
                setGetUser(false)
            })
            .catch(() => {
                console.log({ message: 'URL invalide' });
            })
    }

    function callApiPosts(token) {
        setGetPost(true)
        fetch(`http://localhost:3000/api/post`, {
            method: 'GET',
            'Content-Type': 'application/json',
            Authorization: 'Bearer' + token,
        },
        )

            .then((res) => res.json())
            .then((data) => {
                setDataPost(data)
                setGetPost(false)
            })
            .catch(() => {
                console.log({ message: 'URL post non valide' });
            })
    }

    //JSX
    return (
        <>
            <img src={logo} alt="Logo groupomania" />
            {getUser && getPost ? (
                <div className='spinner'>
                    <i className="fas fa-spinner fa-spin"></i>
                </div>
            ) : (
                <>
                    {adminId ? <></> : <FormHome callApiPost={callApiPosts} />}
                    <div className='cards-container'>
                        {dataPost.map((item, index) => (
                            <Card
                                key={item._id + '-' + index}
                                postId={item._id}
                                posterId={item.posterId}
                                imageUrl={item.imageUrl}
                                post={item.post}
                                likers={item.likers}
                                comments={item.comments}
                                createdAt={item.createdAt}
                                callApiPost={callApiPosts}
                            />
                        ))}
                    </div>
                </>
            )}
        </>
    )
}