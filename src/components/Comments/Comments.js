import React, {useEffect, useState} from 'react';
import CommentsComponent from "./CommentsComponent";
import "./Comments.css"

const Comments = () => {
    const [comments,setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(value => setComments(value))
    },[])
    return (
        <div className={'comments'}>
            {
                comments.map(value => <CommentsComponent
                    key={value.id}
                    id={value.id}
                    postId={value.postId}
                    name={value.name}
                    email={value.email}
                    body={value.body}
                />)
            }
        </div>
    );
};

export default Comments;