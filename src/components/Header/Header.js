import './Header.scss';
import user from './../../common/images/user.png'
import {Genres} from "../Genres/Genres";

const Header = () => {
    return (
        <header>
            <div className="logo">
                OWU Studio
            </div>
            <Genres/>
            <div className="user">
                <img src={user}
                     alt="user"/>
            </div>
        </header>
    );
};

export {Header};