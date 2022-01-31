import React from 'react';

import './User.css';

const User = ({user: {name}}) => {
    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export {User};