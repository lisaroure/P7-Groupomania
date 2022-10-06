import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    let navigate = useNavigate()

    const user = (userId) => {
        console.log('click');
        navigate('/Admin/user/edit/' + userId)
    }

    return (
        <div className='User'>
            users
            {/*onClick={() => user(1 = paramètre uid)}>User 1*/}
            <button onClick={() => user(1)}>User 1</button>
        </div>
    );
};

export default User;