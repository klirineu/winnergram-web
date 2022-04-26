import React, { useEffect, useState } from 'react';
import { mutate } from 'swr';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import API from '../lib/axios';

const LikeButton = (props) => {
    const { postData, posts, mutateUrl, like } = props
    const [isLiked, setLiked ] = useState(like);
    

    useEffect(() => {
            const checkLike = async () => {
                const { data } = await API.get(`/wg/social/feed/post/${postData.id}/isLiked`)

                return setLiked(data.meta)
            }
            checkLike()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postData.id])

    

    const handleLike = async () => {
        const updateLike = posts.map(post => {
            return post.id === postData.id ? {...post, _count: {...post._count, Likes: post._count.Likes + 1 }} : post
        });
        
        await API.patch(`/wg/social/feed/post/${postData.id}/like`);

        setLiked(true)
        mutate(mutateUrl, updateLike, false);    
    }


    const handleDeslike = async () => {
        const updateLike = posts.map(post => {
            return post.id === postData.id ? {...post,  _count: {...post._count, Likes: post._count.Likes - 1 }} : post
        })
        await API.delete(`/wg/social/feed/post/${postData.id}/deslike`);

        setLiked(false)
        mutate(mutateUrl, updateLike, false)
    }

    return (
        <>
            <button onClick={() => { isLiked ? handleDeslike() : handleLike() }} > {isLiked ? <AiFillHeart /> : <AiOutlineHeart />} </button>
        </>
    )
}
export default LikeButton;