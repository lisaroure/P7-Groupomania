import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='SideMenu'>
            <ul>
                <li><Link to="profil">Profil</Link></li>
                <li>&nbsp;</li>
                <li>
                    User
                    <ul>
                        <li><Link to='user/index'>Utilisateurs</Link></li>
                        <li><Link to='user/add'>Ajouter</Link></li>
                    </ul>
                </li>
                <li>
                    Post
                    <ul>
                        <li><Link to='post/index'>Publications</Link></li>
                        <li><Link to='post/edit'>Editer</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;