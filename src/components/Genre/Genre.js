import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieByGenres, toggleGenreStatus} from "../../store";

import './Genre.scss';

const Genre = ({genre}) => {
    const {pageId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (genre.isActive === true) {
            dispatch(getMovieByGenres({pageId, genreId: genre.id}))
            navigate(`/movie/page=${pageId}/with_genres=${genre.name}`)
        }
    }, [genre.isActive, +pageId])

    return (
        <div className={genre.isActive ? 'active' : 'btn-genre'}>
            <button onClick={() => dispatch(toggleGenreStatus(genre.id))}>{genre.name}</button>
        </div>
    );
};

export {Genre};