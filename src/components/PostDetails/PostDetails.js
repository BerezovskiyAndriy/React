import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import css from './PostDetails.module.css';

const PostDetails = () => {
    const params = useParams();

    const {state} = useLocation();
    const [posts,setPosts] = useState(null);

    useEffect(() => {
        if (state){
            setPosts(state)
            return
        }
        postsService.getByUserId(params.id).then(value => setPosts(value))
    },[params.id])

    return (
       <div className={css.post}>
           {posts &&  <div className={css.post_details}>
               <p>id: {posts.id}</p>
               <p>userId: {posts.userId}</p>
               <p>title: {posts.title}</p>
               <p>body: {posts.body}</p>
               <Link to={`comments`}>
                   <button>Comments</button>
               </Link>
           </div>}
           <Outlet/>
       </div>
    );
};

export {PostDetails};