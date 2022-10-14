import React from 'react';

const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <h3>Bienvenue !</h3>
            <p>En tant qu'administrateur, vous disposez des droits  suivants :</p>
            <ul>
                <li>Modifier un utilisateur</li>
                <li>Modifier n'importe quel post</li>
                <li>Ajouter un post</li>
            </ul>
        </div>
    );
};

export default Dashboard;