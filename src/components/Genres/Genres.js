import {useDispatch, useSelector} from "react-redux";
import {Genre} from "../Genre/Genre";

import './Genres.scss';
import {useEffect} from "react";
import {getGenreListAsync} from "../../store";

const Genres = () => {
    const dispatch = useDispatch();
    const {genreList} = useSelector(state => state['movieReducer']);

    useEffect(() => {
        dispatch(getGenreListAsync())
    },[])


    return (
        <div className={'genres'}>
            {genreList && genreList.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};