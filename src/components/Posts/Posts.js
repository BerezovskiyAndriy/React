import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getPosts} from "../../store/posts.slice";
import {Post} from "../Post/Post";

const Posts = () => {
    const {posts} = useSelector(state => state['postsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    },[])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};