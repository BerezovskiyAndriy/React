import React, {useEffect, useState} from 'react';

import {usersService} from "../../services/users.service";
import {User} from "../User/User";

import css from './Users.module.css';

const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value))
    },[])

    return (
        <div className={css.users}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};