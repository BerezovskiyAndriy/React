import './MovieListCard.scss';
import {Link} from "react-router-dom";

const MovieListCard = ( {movie} ) => {
    return (
        <div className={'movie-wrap'}>
            <Link to={'movie_details'}>
                <div className={'movie'}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                             alt="poster"/>
                   <div className={'title'}>
                       <h2>{movie.title}</h2>
                   </div>
                </div>
            </Link>
        </div>
    );
};

export {MovieListCard};