import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../../../_services/user.service';

const User = () => {
    let navigate = useNavigate()

    useEffect(() => {
        userService.getAllUsers()
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        // userService.getUser()
        //     .then(res => console.log(res.data))

        // userService.getAdmin()
        //     .then(res => console.log(res.data))

    }, [])

    const user = (userId) => {
        console.log('click');
        navigate('/Admin/user/edit/' + userId)
    }

    return (
        <div className='User'>
            users here
            {/*onClick={() => user(1 = paramètre uid)}>User 1*/}
            <button onClick={() => user(1)}>User 1</button>
        </div>
    );
};

export default User;