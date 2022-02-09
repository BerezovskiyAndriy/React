import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {getGenreAsync} from "../../store";

import './GenreMovie.scss';

const GenreMovie = ({genre}) => {
    const {id,name} = genre;

    const {pageId} = useParams();
    const dispatch = useDispatch();

    return (
        <div>
            <button className={'btn-genre'} onClick={() => dispatch(getGenreAsync({pageId,genreId:id}))}>{name}</button>
        </div>
    );
};

export {GenreMovie};