import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";


import css from './Albums.module.css';
import {UsersAlbums} from "../UsersAlbums/UsersAlbums";

const Albums = () => {
   const {id} = useParams();

   const [albums,setAlbums] = useState([]);

   useEffect(() => {
       albumsService.getByUserId(id).then(value => setAlbums(value))
   },[id])

    return (
        <div className={css.albums}>
            {
                albums.map(albums => <UsersAlbums key={albums.id} albums={albums}/>)
            }
            <Outlet/>
        </div>
    );
};

export {Albums};