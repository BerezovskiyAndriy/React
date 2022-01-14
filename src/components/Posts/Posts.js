import React, {useEffect, useState} from 'react';

import {postServices} from "../../services/posts.service";
import Post from "../Post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postServices.getByIdUsers(userId)
            .then(value => setPosts(value))
    }, [])
    return (
        <div>
            {posts.map(value => <Post key={value.id}
                                      post={value}/>)}
        </div>
    );
};

export default Posts;