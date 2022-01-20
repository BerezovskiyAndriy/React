import React from 'react';

const AlbumsPhoto = ({photos}) => {
    const {id,albumId,title,thumbnailUrl} = photos;
    return (
        <div >
            <p>id: {id}</p>
            <p>albumId: {albumId}</p>
            <p>title: {title}</p>
            <img src={thumbnailUrl}
                 alt="photo"/>
        </div>
    );
};

export {AlbumsPhoto};