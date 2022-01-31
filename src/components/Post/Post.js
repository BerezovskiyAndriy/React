import React from 'react';

const Post = ({post: {title}}) => {
    return (
        <div>
            {title}
        </div>
    );
};

export {Post};