import React from 'react';
import {Outlet} from "react-router-dom";

import {Posts} from "../../components";

import css from './PostPage.module.css';

const PostsPage = () => {
    return (
        <div className={css.posts}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};