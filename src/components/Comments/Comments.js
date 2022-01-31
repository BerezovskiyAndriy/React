import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getComments} from "../../store/comments.slice";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const {comments} = useSelector(state => state['commentsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments())
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id}
                                     comment={comment}/>)}
        </div>
    );
};

export {Comments};