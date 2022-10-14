import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='SideMenu'>
            <ul>
                <li>&nbsp;</li>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li>
                    User
                    <ul>
                        <li><Link to='/admin/user/index'>Utilisateurs</Link></li>
                        <li><Link to='/admin/user/add'>Ajouter</Link></li>
                    </ul>
                </li>
                <li>
                    Post
                    <ul>
                        <li><Link to='/admin/post/index'>Publications</Link></li>
                        <li><Link to='/admin/post/edit'>Editer</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;