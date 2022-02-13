import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getMovieAsync, resetGenreId, setGenreId, toggleGenreStatus} from '../../store';

import './Genre.scss';

const Genre = ({genre}) => {
    const {genreId} = useSelector(state => state['movieReducer']);
    const {light} = useSelector(state => state['lightThemeReducer']);
    const {pageId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (genre.isActive === true) {
            dispatch(getMovieAsync({pageId, genreId}))
        }
        dispatch(getMovieAsync({pageId, genreId}))
    }, [genre.isActive, +pageId,genreId])

    return (
        <div className={genre.isActive ? 'active' : 'btn-genre'}>
            <button onClick={() => {
                dispatch(setGenreId(genre.id))
                if (genre.isActive) {
                    dispatch(resetGenreId())
                }
                dispatch(toggleGenreStatus(genre.id))
            }} className={light ? 'light-genre' : null}><span>{genre.name}</span></button>
        </div>
    );
};

export {Genre};
