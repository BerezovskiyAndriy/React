import './MovieListCard.scss';
import {Link} from "react-router-dom";

const MovieListCard = ( {movie,sortMovie} ) => {
    return (
        <div className={'movie-wrap'}>
            <Link to={'movie_details'}>
                <div className={'movie'}>
                    { movie ?
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                             alt="poster"/> :
                        <img src={`https://image.tmdb.org/t/p/original${sortMovie.poster_path}`}
                             alt="poster"/> }
                    { movie ? <h2>{movie.title}</h2> : <h2>{sortMovie.title}</h2> }
                </div>
            </Link>

        </div>
    );
};

export {MovieListCard};