import React, { useState } from 'react';
import Cookies from 'js-cookie';
import updateIcon from '../assets/update.svg';
import cancelIcon from '../assets/ban.svg';

export default function EditCommentPost(props) {
    const token = Cookies.get('token')

    const [post, setPost] = useState(props.post)
    const [picture, setPicture] = useState('')
    const [modal, setModal] = useState(false)

    function toggleModal() {
        setModal(!modal)
    }
    function modifyPost(e) {
        e.preventDefault()

        const data = new FormData()
        data.append('image', picture)
        data.append('post', post)

        fetch('http://localhost:3000/api/post/' + props.postId, {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: data,
        })
            .then((res) => res.json())
            .then(() => {
                props.callApiPosts(token)
                toggleModal()
            })
            .catch(() => console.log({ message: 'URL non valide' }))
    }
    //JSX

    return (
        <>
            <img
                onClick={toggleModal}
                src={updateIcon}
                alt='Modifier'
            />
            <div className='card-modify'>
                <h1>Modifier</h1>
                <form onSubmit={modifyPost}>
                    <label>
                        <input
                            type='file'
                            name='file'
                            accept='.jpg, .jpeg, .png'
                            onChange={(e) => setPicture(e.target.files[0])}
                            required
                        />
                    </label>
                    <textarea
                        type='text'
                        name='post'
                        maxLength={240}
                        placeholder='Ecrivez ici'
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        required
                    />
                    <button>Modifier le post</button>
                </form>

                <img
                    onClick={toggleModal}
                    src={cancelIcon}
                    alt='Annuler'
                />
            </div>
        </>
    )
} 