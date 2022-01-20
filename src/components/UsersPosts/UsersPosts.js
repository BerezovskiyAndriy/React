import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService as postService} from "../../services/posts.service";
import {UserPost} from "../UserPost/UserPost";

import css from './UsersPost.module.css';

const UsersPosts = () => {
   const {id} = useParams();

    const [posts,setPosts] = useState([]);

   useEffect(() => {
       postService.getByUserId(id).then(value => setPosts(value))
   },[])

    return (
        <div className={css.users_post}>
            {
                posts.map(post => <UserPost key={post.id} post={post}/>)
            }
        </div>
    );
};

export {UsersPosts};