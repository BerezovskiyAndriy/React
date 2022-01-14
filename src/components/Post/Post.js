import React from 'react';

import './Post.css';

const Post = ({post: {id, userId, title, body}}) => {
    return (
        <div className={'post'}>
            <div>id - {id}</div>
            <div>userId - {userId}</div>
            <div>title - {title}</div>
            <div>body - {body}</div>
            <hr/>
        </div>
    );
};

export default Post;