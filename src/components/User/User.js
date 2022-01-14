import React from 'react';

import './User.css';

const User = ({user, getUser}) => {
    const {id, name, username, email} = user;
    return (
        <div className={'user'}>
            <h3>{id}: {name} {username} - {email}</h3>
            <button onClick={() => getUser(user)}>GetDetails</button>
        </div>
    );
};

export default User;