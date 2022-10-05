// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AppContext } from '../_utils/context';
// import Cookies from 'js-cookie';
// import Card from '../components/Card';
// import FormHome from '../components/NewPostForm';

// export default function Home() {
//     const { setPseudoContext } = useContext(AppContext)

//     const userId = localStorage.getItem('userId')
//     const adminId = localStorage.getItem('adminId')
//     const token = Cookies.get('token')
//     const [dataPost, setDataPost] = useState([])
//     const [getUser, setGetUser] = useState(true)
//     const [getPost, setGetPost] = useState(true)
//     const nav = useNavigate();

//     //Utilisation de useEffect pour afficher les données selon le profil connecté
//     useEffect(() => {
//         if (userId && token) callApiUser(token, userId)
//         if (adminId && token) callApiAdmin(token, adminId)
//         if (!token) return
//     }, [token, userId, adminId])

//     useEffect(() => {
//         if (!token) return
//         callApiPost(token)
//     }, [token])

//     useEffect(() => {
//         if ((!userId || !token) && (!adminId || !token)) nav('/')
//     }, [token, userId, adminId, nav])

//     function callApiUser(token, userId) {
//         setGetUser(true)
//         fetch(`http://localhost:5000/api/user/user/${userId}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: 'Bearer ' + token,
//             },
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 setPseudoContext(data.pseudo)
//                 setGetUser(false)
//             })
//             .catch(() => {
//                 console.log('URL user non valide');
//             })
//     }

//     function callApiAdmin(token, adminId) {
//         setGetUser(true)
//         fetch(`http://localhost:5000/api/user/admin/${adminId}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: 'Bearer ' + token,
//             },
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 setPseudoContext(data.pseudo)
//                 setGetUser(false)
//             })
//             .catch(() => {
//                 console.log('URL admin non valide');
//             })
//     }

//     function callApiPost(token) {
//         setGetPost(true)
//         fetch(`http://localhost:5000/api/post`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: 'Bearer' + token,
//             },
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 setDataPost(data)
//                 setGetPost(false)
//             })
//             .catch(() => {
//                 console.log('URL posts non valide');
//             })
//     }

//     //JSX
//     return (
//         <>
//             {getUser && getPost ? (
//                 <div className='spinner'>
//                     <i className="fas fa-spinner fa-spin"></i>
//                 </div>
//             ) : (
//                 <>
//                     {adminId ? <></> : <FormHome callApiPost={callApiPost} />}
//                     <div className='cards-container'>
//                         {dataPost.map((item, index) => (
//                             <Card
//                                 key={item._id + '-' + index}
//                                 postId={item._id}
//                                 posterId={item.posterId}
//                                 imageUrl={item.imageUrl}
//                                 post={item.post}
//                                 likers={item.likers}
//                                 createdAt={item.createdAt}
//                                 callApiPost={callApiPost}
//                             />
//                         ))}
//                     </div>
//                 </>
//             )}
//         </>
//     )
// }

import React from 'react';

const Home = () => {
    return (
        <div className='home'>
            Welcome !
        </div>
    );
};

export default Home;