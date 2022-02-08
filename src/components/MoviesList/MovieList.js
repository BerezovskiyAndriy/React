import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {getMovieAsync} from "../../store";
import {MovieListCard} from "../MoviesListCard/MovieListCard";

import './MovieList.scss';

const MovieList = () => {
    const {movies,genreMovies} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();
    const {pageId} = useParams();

    useEffect(() => {
        dispatch(getMovieAsync(pageId))
    },[+pageId])

    return (
        <div className={'movies-wrap'}>
            {
                genreMovies.length ? genreMovies.map(sortMovie => <MovieListCard key={sortMovie.id} sortMovie={sortMovie}/>):
                movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            }
        </div>
    );
};

export {MovieList};