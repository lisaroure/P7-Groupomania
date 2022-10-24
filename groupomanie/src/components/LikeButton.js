import React, { useEffect, useRef, useState } from 'react';
import { postService } from '../_services/post.service';
import likeFull from "../assets/heart.svg"
import likeEmpty from "../assets/heart-filled.svg"

const LikeButton = ({ post }) => {
    const [liked, setLiked] = useState(false)
    const flag = useRef(false)

    const like = () => {
        setLiked(true)
    }

    const unlike = () => {
        setLiked(false)
    }

    useEffect(() => {
        if (flag.current === false) {
            // console.log(post._id);
            if (post.likers.includes(post.posterId)) setLiked(true)
            else setLiked(false)
            postService.likePost(post._id)

                .then(res => {
                    console.log(res.data);
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true

    }, [])



    return (
        <div className='like-container'>
            {/* {console.log(post.likers.includes(post.posterId))} */}

            {post.posterId && liked === false && (
                <img src={likeEmpty} onClick={like} alt="like" />
            )}
            {post.posterId && liked && (
                <img src={likeFull} onClick={unlike} alt="unlike" />

            )}
            <span>{post?.likers?.length}</span>
        </div>
    );
};

export default LikeButton;