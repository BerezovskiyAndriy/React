import React, {useEffect, useState} from 'react';

import {userServices} from "../../services/users.service";
import User from "../User/User";

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userServices.getAll()
            .then(value => setUsers(value))
    }, [])
    return (
        <div>
            {
                users.map(value => <User key={value.id}
                                         user={value}
                                         getUser={getUser}/>)
            }
        </div>
    );
};

export default Users;