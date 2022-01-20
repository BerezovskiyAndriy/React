import React from 'react';
import {Outlet} from "react-router-dom";

import {Users} from "../../components";

import css from './UsersPage.module.css';

const UsersPage = () => {
    return (
        <div className={css.users_page}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};