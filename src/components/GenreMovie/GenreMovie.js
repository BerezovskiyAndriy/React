import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getGenreAsync} from "../../store";

import './GenreMovie.scss';

const GenreMovie = ({genre}) => {
    const {pageId} = useParams();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getGenreAsync({pageId, genreId: genre.id}))
    // },[+pageId])

    return (
        <div className={'btn-genre'}>
            <Link to={`with_genres=${genre.name}`}>
                <button>{genre.name}</button>
            </Link>
        </div>
    );
};

export {GenreMovie};