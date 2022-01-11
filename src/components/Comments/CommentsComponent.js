import React from 'react';

const CommentsComponent = (props) => {
    const {id,postId,name,email,body} = props;
    return (
        <div className={'comment'}>
            <h1>{id} - {name}</h1>
            <h2>PostId: {postId} - {email}</h2>
            <p>{body}</p>
        </div>
    );
};

export default CommentsComponent;