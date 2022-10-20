import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { userService } from "../../_services/user.service";
const UserEdit = () => {

    let navigate = useNavigate();
    const [text, setText] = useState([]);
    const [image, setImage] = useState();

    const { isLoading, data } = useQuery('users', userService.getUser, { onSuccess: setImage, setText })
    const users = data || []

    if (isLoading) {
        return <i className="fas fa-spinner fa-spin"></i>;
    }

    const onChange = (e) => {
        setText(e.target.value);
    };

    const imageChange = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0]);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("imageUrl", image);
        formData.append("user", text);

        userService
            .modifyUser(formData)
            .then(() => navigate(".."))
            .catch((err) => console.log(err));
    };

    return (
        <>
            {users.map((user) => (

                <form onSubmit={onSubmit} key={user._id}>

                    <div className="group" >
                        <label htmlFor="post">Votre texte</label>
                        <textarea name="post" defaultValue={user.post} onChange={onChange}></textarea>
                    </div>

                    <div className="group">
                        <label htmlFor="image">Image</label>
                        <input type="file" name="image" onChange={imageChange} />
                    </div>
                    <div className="group">
                        <button>Modifier</button>
                    </div>

                </form>
            ))
            }
        </>
    );
};

export default UserEdit;