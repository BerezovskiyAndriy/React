import React from 'react';

const UsersComponent = (props) => {
    const {id,name,username,email} = props;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default UsersComponent;