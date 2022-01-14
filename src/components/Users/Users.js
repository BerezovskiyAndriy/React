import React, {useEffect, useState} from 'react';
import UsersComponent from "./UsersComponent";

const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    },[])
    return (
        <div>
            {
                users.map(value => <UsersComponent key={value.id} user={value}/>)
            }
        </div>
    );
};

export default Users;