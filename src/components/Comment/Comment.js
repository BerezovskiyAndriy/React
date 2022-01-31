import React from 'react';

const Comment = ({comment: {name,email}}) => {
    return (
        <div>
            {name} - {email}
        </div>
    );
};

export {Comment};