import React, {useEffect, useState} from 'react';
import PostsComponent from "./PostsComponent";
import "./Posts.css";

const Posts = () => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => setPosts(value))
    },[])
    return (
        <div className={'posts'}>
            {
                posts.map(value => <PostsComponent
                    key={value.id}
                    id={value.id}
                    userId={value.userId}
                    title={value.title}
                    body={value.body}
                />)
            }
        </div>
    );
};

export default Posts;