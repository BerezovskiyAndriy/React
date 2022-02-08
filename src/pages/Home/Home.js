import {GenreMovies, Header, MovieList, SortGenreMovies} from "../../components";

import './Home.scss';


const Home = () => {
    return (
        <div>
            <Header/>
            <div className={'container'}>
                <div className={'side-bar'}>
                    <h2>Genre:</h2>
                    <GenreMovies/>
                </div>
                <div><MovieList/></div>
            </div>
        </div>
    );
};

export {Home};