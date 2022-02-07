import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getMovieAsync, getMovies} from "../../store";
import {MovieListCard} from "../MoviesListCard/MovieListCard";

import './MovieList.scss';
import {useParams} from "react-router-dom";

const MovieList = () => {
    const {movies} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();
    const {pageId} = useParams();

    useEffect(() => {
        dispatch(getMovieAsync(pageId))
    },[+pageId])

    return (
        <div className={'movies-wrap'}>
            {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MovieList};