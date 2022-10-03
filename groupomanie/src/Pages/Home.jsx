/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../utils/context';
import Cookies from 'js-cookie';
import Card from '../components/Card';
import FormHome from '../components/NewPostForm';
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
    }, [token, userId, adminId, callApiUser, callApiAdmin])

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
            .catch(err => (err))
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
            .catch(err => (err))
    }

    function callApiPosts(token) {
        setGetPost(true)
        fetch(`http://localhost:3000/api/post`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer' + token,
            },
        },
        )
            .then((res) => res.json())
            .then((data) => {
                setDataPost(data)
                setGetPost(false)
            })
            .catch(err => (err))
    }

    //JSX
    return (
        <>
            <Link to='/home'>
                <img
                    src={logo}
                    alt="Logo groupomania"
                    width={140}
                    height={152}
                />
            </Link>
            {getUser && getPost ? (
                <div className='spinner'>
                    <i className="fas fa-spinner fa-spin"></i>
                </div>
            ) : (
                <>
                    {adminId ? <></> : <FormHome callApiPosts={callApiPosts} />}
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
                                callApiPosts={callApiPosts}
                            />
                        ))}
                    </div>
                </>
            )}
        </>
    )
}