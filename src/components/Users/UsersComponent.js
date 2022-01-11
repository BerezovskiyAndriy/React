import React from 'react';

import "./Users.css"

const UsersComponent = (props) => {
    let {id,name,username,email} = props;
    return (
        <div className={'user'}>
            <h1>{id} - {name} {username}</h1>
            <p>{email}</p>
        </div>
    );
};

export default UsersComponent;