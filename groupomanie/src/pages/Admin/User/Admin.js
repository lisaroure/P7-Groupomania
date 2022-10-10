import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminService } from '../../../_services/admin.service';

const Admin = () => {
    let navigate = useNavigate()

    useEffect(() => {
        adminService.getAdmin()
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [])

    const admin = (adminId) => {
        console.log('click');
        navigate('/Admin/user/edit/' + adminId)
    }

    return (
        <div className='Admin'>
            users
            {/*onClick={() => admin(1 = paramètre uid)}>User 1*/}
            <button onClick={() => admin(1)}>Admin</button>
        </div>
    );
};

export default Admin;