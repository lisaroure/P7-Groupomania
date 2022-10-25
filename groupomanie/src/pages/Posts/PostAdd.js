import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postService } from '../../_services/post.service';
import img from "../../assets/image.svg";
import write from "../../assets/pen.svg"
import Popup from 'reactjs-popup';

const PostAdd = () => {
    const [text, setText] = useState([])
    const [image, setImage] = useState()
    let navigate = useNavigate()

    // Handle modification dans le formulaire
    const onChange = (e) => {
        setText(e.target.value)
    }

    const imageChange = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(post)
        const formData = new FormData();
        formData.append('imageUrl', image);
        formData.append('post', text);

        postService.createPost(formData)
            .then(() => navigate('..'))
            .catch(err => console.log(err))
    }

    return (
        <div className='form-post'>
            <form onSubmit={onSubmit}>
                <h4>Créez votre publication</h4>
                <div className="group">
                    <img className='svg' src={write} alt="ajout d'une img" />
                    <label htmlFor="post"></label>
                    <textarea name="post" placeholder='Ecrivez ici' onChange={onChange}></textarea>
                    {image === null && (
                        <Popup>
                            <div>Image manquante !</div>
                        </Popup>
                    )}
                </div>
                <div className="group">
                    <img className='svg' src={img} alt="écrire un post" />
                    <label htmlFor="image"></label>
                    <input type="file" name="image" onChange={imageChange} />
                    {text === null && (
                        <Popup>
                            <div>Veuillez écrire un message</div>
                        </Popup>
                    )}
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default PostAdd;