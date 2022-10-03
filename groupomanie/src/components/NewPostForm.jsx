import Cookies from 'js-cookie';
import React, { useState } from 'react';

export default function FormHome(props) {
    const token = Cookies.get('token')
    const [posts, setPosts] = useState('')
    const [picture, setPicture] = useState('')

    function onSubmitHandler(e) {
        e.preventDefault()

        const data = new FormData()
        data.append('image', picture)
        data.append('post', posts)

        fetch('http://localhost:3000/api/post', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPosts('')
                props.callApiPosts(token)
            })
            .catch((err) => (err))
    }

    //JSX
    return (
        <div className='home-form' onSubmit={onSubmitHandler} >
            <textarea
                type='file'
                name='file'
                accept='.jpg, .jpeg, .png'
                onChange={(e) => setPicture(e.target.files[0])}

            />
            <textarea
                type='text'
                name='post'
                maxLength={240}
                placeholder='Ecrivez votre post ici'
                value={posts}
                onChange={(e) => setPosts(e.target.value)}

            />
            <button className='btn-post'>
                Envoyer
            </button>

        </div >
    )

}