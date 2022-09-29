import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import deleteIcon from '../assets/trash.svg';
import likeIcon from '../assets/heart-filled.svg';
import unlikeIcon from '../assets/heart.svg';
import commentIcon from '../assets/comment.svg';
import CardComments from './CardComments';
import EditCommentPost from './EditCommentPost';
import { dateParser } from '../utils/Utils';

export default function Card(props) {
    const adminId = localStorage.getItem('adminId')
    const userId = localStorage.getItem('userId')
    const token = Cookies.get('token')
    const [pseudo, setPseudo] = useState('')
    const [manyLike, setManyLiked] = useState(props.likers.length)
    const [liked, setLiked] = useState(false)
    const [showComments, setShowComments] = useState(false)


    //like
    function like(userId, postId) {
        fetch(`http://localhost:5000/api/post/like/${postId}`, {
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
        fetch(`http://localhost:5000/api/post/unlike/${postId}`, {
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
        fetch(`http://localhost:5000/api/post/${postId}`, {
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
        fetch(`http://localhost:5000/api/user/${props.posterId}`, {
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
        <div className='cards-container'>
            <img src={props.imageUrl} alt='Post pic' />
            <div className='post-infos'>
                <span>{dateParser(props.createdAt)}</span>
                <h3>{pseudo}</h3>
            </div>
            <p>{props.posts}</p>
            {adminId ? (
                <></>
            ) : (
                <div className='card'>
                    {!liked ? (
                        <img
                            onClick={() => like(userId, props.postId)}
                            src={unlikeIcon}
                            alt='Unliker un post'
                            height={30}
                            width={30}
                        />
                    ) : (
                        <img
                            onClick={() => unlike(userId, props.postId)}
                            src={likeIcon}
                            alt='Liker un post'
                            height={30}
                            width={30}
                        />
                    )}

                    <p>{manyLike}</p>
                </div>
            )}
            <img
                onClick={() => setShowComments(!showComments)}
                src={commentIcon}
                alt='Commenter'
                height={30}
                width={30}
            />

            {adminId && (
                <>
                    <EditCommentPost
                        post={props.posts}
                        imageUrl={props.imageUrl}
                        postId={props.postId}
                        callApiPosts={props.callApiPosts}
                    />
                    <img
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
                </>
            )
            }
            {props.posterId === userId && (
                <>
                    <div className='btn-container' />
                    <EditCommentPost
                        post={props.posts}
                        imageUrl={props.imageUrl}
                        postId={props.postId}
                        callApiPosts={props.callApiPosts} /><img
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
                </>
            )
            }
            <div className='cards-container'>
                {showComments && (
                    <CardComments
                        postId={props.postId}
                        comments={props.comments}
                        callApiPosts={props.callApiPosts}
                    />
                )}
            </div>
        </div>
    )
}