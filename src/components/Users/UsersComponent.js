import React from 'react';

const UsersComponent = (props) => {
    const {user: {id, name, username, email}} = props;
    return (
        <div>
            {id} {name} -- {username} -- {email}
        </div>
    );
};

export default UsersComponent;