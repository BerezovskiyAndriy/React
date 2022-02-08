import {useSelector} from "react-redux";

import {GenreMovie} from "../GenreMovie/GenreMovie";

import './GenreMovies.scss';

const GenreMovies = () => {
    const {genreList} = useSelector(state => state['movieReducer']);

    return (
        <div className={'genre-list'}>
            {genreList.map(genre => <GenreMovie key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenreMovies};