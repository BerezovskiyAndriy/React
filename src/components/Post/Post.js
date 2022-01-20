import React from 'react';
import {Link} from "react-router-dom";

import css from './Post.module.css';

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div className={css.post}>
            <p>{id}: {title}</p>
            <Link to={id.toString()} state={post}>details &rarr;</Link>
            <hr/>
        </div>
    );
};

export {Post};