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
            .catch((err) => console.log({ message: 'erreur' }))
    }

    //JSX
    return (
        <form onSubmit={onSubmitHandler}>
            <label>
                <input
                    type='file'
                    name='file'
                    accept='.jpg, .jpeg, .png'
                    onChange={(e) => setPicture(e.target.files[0])}
                    required
                />
            </label>

            <label>
                <textarea
                    type='text'
                    name='post'
                    maxLength={240}
                    placeholder='Ecrivez votre post ici'
                    value={posts}
                    onChange={(e) => setPosts(e.target.value)}
                    required
                />
            </label>
            <button className='btn-post' onClick={posts}>
                Envoyer
            </button>
        </form>
    )

}