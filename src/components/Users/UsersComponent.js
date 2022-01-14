import React from 'react';

import './User.css';
const UsersComponent = (props) => {
    const {user: {id, name, username, email}} = props;
    return (
        <div className={'users'}>
            <div className="user">
                {id} {name} -- {username} -- {email}
            </div>

        </div>
    );
};

export default UsersComponent;