import React from 'react';
import { Link } from "react-router-dom";

import css from './UserAlbums.module.css';

const UsersAlbums = ({albums}) => {
    const {id,userId,title} = albums;

    return (
        <div className={css.user_album}>
            <p>id: {id}</p>
            <p>userId: {userId}</p>
            <p>title: {title}</p>
            <Link to={`${id}/photos`}>Photo</Link>
            <hr/>
        </div>
    );
};

export {UsersAlbums};