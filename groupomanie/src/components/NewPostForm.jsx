import Cookies from 'js-cookie';
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components

const StyledFrom = styled.form`
width: 100px;
display: flex;
flex-direction: column;
`
const Input = styled.input`
font-size: 15px;
`
const TextArea = styled.textarea` 
font-size: 15px;
`
const Btn = styled.button`
border-radius: 20px;
cursor: pointer;
`
// Components de l'app

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
        <StyledFrom onSubmit={onSubmitHandler} >
            <label>
                <Input
                    type='file'
                    name='file'
                    accept='.jpg, .jpeg, .png'
                    onChange={(e) => setPicture(e.target.files[0])}
                />
            </label>
            <label>
                <TextArea
                    type='text'
                    name='post'
                    maxLength={240}
                    placeholder='Ecrivez votre post ici'
                    value={posts}
                    onChange={(e) => setPosts(e.target.value)}
                ></TextArea>
            </label>
            <Btn>Envoyer</Btn>
        </StyledFrom>
    )

}