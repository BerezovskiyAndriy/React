import './MovieListCard.scss';

const MovieListCard = ( {movie,sortMovie} ) => {
    return (
        <div className={'movie-wrap'}>
            <div className={'movie'}>
                { movie ?
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                     alt="poster"/> :
                  <img src={`https://image.tmdb.org/t/p/original${sortMovie.poster_path}`}
                         alt="poster"/> }
                { movie ? <h2>{movie.title}</h2> : <h2>{sortMovie.title}</h2> }
            </div>
        </div>
    );
};

export {MovieListCard};