import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { userService } from '../../../_services/user.service';

const UserEdit = () => {
    const [user, setUsers] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

    const { uid } = useParams()

    const onChange = (e) => {
        setUsers({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        userService.modifyUser(user)
            .then(res => {
                userService(res.data)
                navigate('/../edit/uid')
            })
    }

    useEffect(() => {
        if (flag.current === false) {
            userService.getUser(uid)
                .then(res => {
                    console.log(res.data)
                    setUsers(res.data.data)
                })
                .catch(err => console.log(err))
        }
        // méthode pour éviter le double appel useEffect
        return () => flag.current = true

    }, [uid])

    return (
        <form onSubmit={onSubmit}>
            <div className='group'>
                <label htmlFor='pseudo'>Pseudo</label>
                <input
                    type="text"
                    name='pseudo'
                    value={user.pseudo}
                    onChange={onChange}
                />
            </div>
            <div className='group'>
                <label htmlFor='email'>Adresse e-mail</label>
                <input
                    type="text"
                    name='email'
                    value={user.email}
                    onChange={onChange}
                />
            </div>

            <div className='group'>
                <button>Modifier</button>
            </div>

        </form>
    );
};

export default UserEdit;