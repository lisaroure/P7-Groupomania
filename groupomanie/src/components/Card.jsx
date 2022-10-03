import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styled from 'styled-components';
import deleteIcon from '../assets/trash.svg';
import likeIcon from '../assets/heart-filled.svg';
import unlikeIcon from '../assets/heart.svg';
import EditCommentPost from './EditCommentPost';
import { dateParser } from '../utils/Utils';

// Composants styled

const CardDiv = styled.div`

`
const SmallDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-between;
`
const ParaStyled = styled.p`
font-size: 15px;
font-weight: bold;
`

const AdminDiv = styled.div`
display: flex;
align-items: center;
`
const CardImage = styled.img`
height: 80px;
width: 80px;
border-radius: 50%;
`
const Btn = styled.div`
display: flex;
flex-direction: wrap;
`
const LikeImg = styled.img`
cursor: pointer;
`
const DeleteImg = styled.img`
cursor: pointer;
`
// Component de l'app

export default function Card(props) {
    const adminId = localStorage.getItem('adminId')
    const userId = localStorage.getItem('userId')
    const token = Cookies.get('token')
    const [pseudo, setPseudo] = useState('')
    const [manyLike, setManyLiked] = useState(props.likers.length)
    const [liked, setLiked] = useState(false)


    //like
    function like(userId, postId) {
        fetch(`http://localhost:3000/api/post/like/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify({ id: userId }),
        })
            .then((res) => res.json())
            .then((data) => {
                setLiked(true)
                setManyLiked(data.likers.length)
            })
            .catch((err) => console.log(err))
    }

    //dislike
    function unlike(userId, postId) {
        fetch(`http://localhost:3000/api/post/unlike/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify({ id: userId }),
        })
            .then((res) => res.json())
            .then((data) => {
                setLiked(false)
                setManyLiked(data.likers.length)
            })
            .catch((err) => console.log(err))
    }

    // Si un user a déjà liké

    useEffect(() => {
        if (props.likers.includes(userId)) {
            setLiked(true)
        } else {
            setLiked(false)
        }
    }, [props.likers, userId])

    // Supprimer un post

    function deletePost(postId, token) {
        fetch(`http://localhost:3000/api/post/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                if (res.ok) {
                    props.callApiPosts(token)
                }
                return res.json()
            })
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }

    //Pseudos
    useEffect(() => {
        fetch(`http://localhost:3000/api/user/${props.posterId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setPseudo(data.pseudo)
            })
            .catch((err) => console.log(err))
    }, [props.posterId, token])

    // JSX

    return (
        <CardDiv>
            <CardImage src={props.imageUrl} alt='Post pic' />
            <SmallDiv>
                <div>
                    <ParaStyled>{dateParser(props.createdAt)}</ParaStyled>
                    <h3>{pseudo}</h3>
                </div>
                <p>{props.posts}</p>
                {
                    adminId ? (
                        <AdminDiv></AdminDiv>
                    ) : (
                        <AdminDiv>
                            {!liked ? (
                                <LikeImg
                                    onClick={() => like(userId, props.postId)}
                                    src={unlikeIcon}
                                    alt='Unliker un post'
                                    height={30}
                                    width={30}
                                />
                            ) : (
                                <LikeImg
                                    onClick={() => unlike(userId, props.postId)}
                                    src={likeIcon}
                                    alt='Liker un post'
                                    height={30}
                                    width={30}
                                />
                            )}
                            <p>{manyLike}</p>
                        </AdminDiv>
                    )}
            </SmallDiv>
            {adminId && (
                <Btn>
                    <EditCommentPost
                        post={props.posts}
                        imageUrl={props.imageUrl}
                        postId={props.postId}
                        callApiPosts={props.callApiPosts}
                    />
                    <DeleteImg
                        src={deleteIcon}
                        alt="Supprimer"
                        height={30}
                        width={30}
                        onClick={() => {
                            if (window.confirm('La suppression de ce post sera définitive')) {
                                deletePost(props.postId, token)
                            }
                        }}
                    />
                </Btn>
            )}
            {
                props.posterId === userId && (
                    <Btn>
                        <EditCommentPost
                            post={props.posts}
                            imageUrl={props.imageUrl}
                            postId={props.postId}
                            callApiPosts={props.callApiPosts}
                        />
                        <DeleteImg
                            src={deleteIcon}
                            alt='Supprimer'
                            height={30}
                            width={30}
                            onClick={() => {
                                if (window.confirm('La suppression de ce post sera définitive')) {
                                    deletePost(props.postId, token);
                                }
                            }}
                        />
                    </Btn>
                )}
        </CardDiv>
    )
}