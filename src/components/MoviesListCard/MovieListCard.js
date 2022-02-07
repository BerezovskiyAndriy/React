import './MovieListCard.scss';

const MovieListCard = ( {movie: {original_title}} ) => {
    return (
        <div className={'movie-wrap'}>
            <div className={'movie'}>
                <h2>{original_title}</h2>
            </div>
        </div>
    );
};

export {MovieListCard};