import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LikeButton = ({ post }) => {
    const [liked, setLiked] = useState(false)
    const { uid } = useParams()

    const like = () => {
        document.getElementById('likePost'(post._id, uid))
        setLiked(true)
    }

    const unlike = () => {
        document.getElementById('unlikePost'(post._id, uid))
        setLiked(false)
    }

    useEffect(() => {
        if (post.likers.includes(uid)) setLiked(true)
        else setLiked(false)
    }, [])

    return (
        <div className='like-container'>
            {uid && liked === false && (
                <img src="./assets/heart.svg" onClick={like} alt="like" />
            )}
            {uid && liked && (
                <img src="./assets/heart-filled.svg" onClick={unlike} alt="unlike" />
            )}
            <span>{post?.likers?.length}</span>
        </div>
    );
};

export default LikeButton;