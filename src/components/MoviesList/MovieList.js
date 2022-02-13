import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import {getMovieAsync, resetVideos} from '../../store';
import {MovieListCard} from '../MoviesListCard/MovieListCard';
import {moviePaginator} from '../../utils/moviePaginator';

import './MovieList.scss';

const MovieList = () => {
    const {movies,genreId} = useSelector(state => state['movieReducer']);
    const {light} = useSelector(state => state['lightThemeReducer']);
    const dispatch = useDispatch();
    const {pageId} = useParams();

    const currentPage = +pageId;
    const currentPages = [];

    moviePaginator(currentPage,currentPages);

    useEffect(() => {
        dispatch(getMovieAsync({pageId,genreId}))
        dispatch(resetVideos())
    },[+pageId])
    
    return (
        <div className={light ? 'light-movie-wrap' : 'movies-wrap'}>
            {
                movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
            }
            <div className={'btn-pagination'}>
                {currentPages.map(pages =>
                    <Link to={`/movie/page=${pages}`} key={pages}>
                        <button className={
                            pages === currentPage ? 'current' : null
                        }>{pages}</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export {MovieList};