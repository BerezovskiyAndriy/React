import './MovieListCard.scss';
import {Link} from "react-router-dom";

const MovieListCard = ( {movie} ) => {
    const {id,title,poster_path} = movie;
    const urlImage = `https://image.tmdb.org/t/p/original${poster_path}`

    return (
        <div className={'movie-wrap'}>
            <div className={'movie'}>
                <img src={urlImage}
                     alt="poster"/>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export {MovieListCard};