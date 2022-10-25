import React, { useState } from 'react';
import { postService } from '../../_services/post.service';
import img from "../../assets/image.svg";
import write from "../../assets/pen.svg"
import Popup from 'reactjs-popup';

const PostAdd = ({marcel}) => {
    const [text, setText] = useState([])
    const [image, setImage] = useState()

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
            .then((res) => {
                console.log(res)
                marcel(prev => [res.data.data, ...prev])
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='form-post'>
            <form onSubmit={onSubmit}>
                <h4>Créez votre publication</h4>
                <div className="group">
                    <img className='svg' src={write} alt="ajout d'une img"
                        {...image === null && (
                            <Popup>
                                <div>Image manquante !</div>
                            </Popup>
                        )} />
                    <label htmlFor="post"></label>
                    <textarea name="post" placeholder='Ecrivez ici' onChange={onChange}></textarea>

                </div>
                <div className="group">
                    <img className='svg' src={img} alt="écrire un post"
                        {...text === null && (
                            <Popup>
                                <div>Veuillez écrire un message</div>
                            </Popup>
                        )} />
                    <label htmlFor="image"></label>
                    <input type="file" name="image" onChange={imageChange} />

                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default PostAdd;