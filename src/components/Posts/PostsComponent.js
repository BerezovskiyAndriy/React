import React from 'react';

const PostsComponent = (props) => {
    const {id,userId,title,body} = props;
    return (
        <div className={'post'}>
            <h1>{id} - {title}</h1>
            <h2>userId - {userId}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostsComponent;