import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userService } from "../../_services/user.service";


const UserEdit = () => {

    let navigate = useNavigate();
    const [text, setText] = useState([]);
    const [image, setImage] = useState();
    const [users, setUsers] = useState([])

    const { uid } = useParams()
    const flag = useRef(false)

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
        formData.append("user", users);
        formData.append("post", text);
        userService
            .modifyUser(uid)
            .then(() => navigate(".."))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (flag.current === false) {
            userService.getUser(uid)
                .then(res => {
                    console.log(res.data.data);
                    setUsers(res.data.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
    })


    // Form : regarder ce qui bug pour l'affichage
    return (
        <div className="UserEdit">
            {users.data.map((user) => (

                <form onSubmit={onSubmit} key={user._id}>
                    <div className="group" >
                        <label htmlFor="pseudo">Pseudo</label>
                        <div defaultValue={users.pseudo} onChange={onChange}></div>
                    </div>

                    <div className="group">
                        <label htmlFor="email">Email</label>
                        <div defaultValue={users.email} onChange={onChange}></div>
                    </div>
                    <div className="user-post">
                        <label htmlFor="post">Modifier votre post</label>
                        <textarea defaultValue={users.text} name="post" onChange={onChange}></textarea>
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
        </ div>
    );
};

export default UserEdit;