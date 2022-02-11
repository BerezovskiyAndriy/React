import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";

import {getMovieAsync} from "../../store";
import {MovieListCard} from "../MoviesListCard/MovieListCard";
import {moviePaginator} from "../../utils/moviePaginator";

import './MovieList.scss';
import {Header} from "../Header/Header";
import {Genre} from "../Genre/Genre";


const MovieList = () => {
    const {movies} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();
    const {pageId} = useParams();

    const currentPage = +pageId;
    const currentPages = [];

    moviePaginator(currentPage,currentPages);

    useEffect(() => {
        dispatch(getMovieAsync(pageId))
    },[+pageId])

    return (
        <div className={'movies-wrap'}>
            {
                movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
            }
            <div className={'btn-pagination'}>
                {currentPages.map(pages =>
                    <Link to={`/movie/page=${pages}`} key={pages}>
                        <button>{pages}</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export {MovieList};