import './Header.scss';
import user from './../../common/images/user.png'
import {GenreMovies} from "../GenreMovies/GenreMovies";

const Header = () => {
    return (
        <header>
            <div className="logo">
                OWU Studio
            </div>
            <GenreMovies/>
            <div className="user">
                <img src={user}
                     alt="user"/>
            </div>
        </header>
    );
};

export {Header};