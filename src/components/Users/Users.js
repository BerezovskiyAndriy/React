import React, {useEffect, useState} from 'react';

import UsersComponent from "./UsersComponent";
import "./Users.css";

const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers(value))
    },[])
    return (
        <div className={'users'}>
            {
                users.map(value => <UsersComponent
                    key={value.id}
                    id={value.id}
                    name={value.name}
                    username={value.username}
                    email={value.email}
                />)
            }
        </div>
    );
};

export default Users;