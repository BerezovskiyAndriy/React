import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getGenreAsync} from "../../store";

import './GenreMovie.scss';

const GenreMovie = ({genre}) => {
    const [isActive, setIsActive] = useState(false);
    const {pageId} = useParams();
    const dispatch = useDispatch();

    // const isToggle = () => {
    //   isActive ? setIsActive(false) : setIsActive(true)
    // }

    useEffect(() => {
        if (isActive === true) {
            dispatch(getGenreAsync({pageId, genreId: genre.id}))
        }
    }, [+pageId])


    return (
        <div className={'btn-genre'}>
            <Link to={`with_genres=${genre.name}`}>
                <button onClick={() => setIsActive(!isActive)}>{genre.name}</button>
            </Link>
        </div>
    );
};

export {GenreMovie};