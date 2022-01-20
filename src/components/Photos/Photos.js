import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {photosService} from "../../services/photos.service";
import {AlbumsPhoto} from "../AlbumsPhoto/AlbumsPhoto";

import css from './Photos.module.css';

const Photos = () => {
    const {photoId} = useParams();

    const [photos,setPhotos] = useState([]);

    useEffect(() => {
        photosService.getByIdAlbums(photoId).then(value => setPhotos(value))
    },[photoId])

    return (
        <div className={css.photos}>
            {
                photos.map(photos => <AlbumsPhoto key={photos.id} photos={photos}/>)
            }
        </div>
    );
};

export {Photos};