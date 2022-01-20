import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentsService} from "../../services/comments.service";
import {PostComment} from "../PostComment/PostComment";

import css from './PostComments.module.css';

const PostComments = () => {
    const {id} = useParams();

    const [comments,setComments] = useState([]);

    useEffect(() => {
        commentsService.getByIdPhotos(id).then(value => setComments(value))
    },[])

    return (
        <div className={css.post_comments}>
            {
                comments.map(comment => <PostComment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {PostComments};