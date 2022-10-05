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
    const [post, setPost] = useState('')
    const [picture, setPicture] = useState('')

    function onSubmitHandler(e) {
        e.preventDefault()

        const data = new FormData()
        data.append('image', picture)
        data.append('post', post)

        fetch('http://localhost:5000/api/post', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/octet-stream',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPost('')
                props.callApiPost(token)
            })
            .catch(() => {
                console.log('requete invalide');
            })
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
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                ></TextArea>
            </label>
            <Btn>Envoyer</Btn>
        </StyledFrom>
    )

}