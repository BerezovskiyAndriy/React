import {Link} from 'react-router-dom';

import './MovieListCard.scss';

const MovieListCard = ( {movie} ) => {
    const urlImg = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

    return (
        <div className={'movie-wrap'}>
            <Link to={`/movie/${movie.id}/movie_details`} state={movie}>
                <div className={'movie'}>
                        <img src={urlImg}
                             alt='poster'/>
                   <div className={'title'}>
                       <h2>{movie.title}</h2>
                   </div>
                </div>
            </Link>
        </div>
    );
};

export {MovieListCard};