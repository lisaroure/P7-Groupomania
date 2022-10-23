import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../_services/post.service';
import likeFull from "../assets/heart.svg"
import likeEmpty from "../assets/heart-filled.svg"

const LikeButton = ({ post }) => {
    const [liked, setLiked] = useState(false)
    const flag = useRef(false)
    const { posterId } = useParams()

    const like = () => {
        document.getElementById('likePost'(post._id, posterId))
        setLiked(true)
    }

    const unlike = () => {
        document.getElementById('unlikePost'(post._id, posterId))
        setLiked(false)
    }

    useEffect(() => {
        if (flag.current === false) {
            postService.likePost(posterId)
                .then(res => {
                    console.log(res.data);
                    setLiked(res.data.data)
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true

    }, [])

    return (
        <div className='like-container'>
            {posterId && liked === false && (
                <img src={likeEmpty} onClick={like} alt="like" />
            )}
            {posterId && liked && (
                <img src={likeFull} onClick={unlike} alt="unlike" />
            )}
            <span>{post?.likers?.length}</span>
        </div>
    );
};

export default LikeButton;