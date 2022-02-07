import './Header.scss';
import user from './../../common/images/user.png'

const Header = () => {
    return (
        <header>
            <div className="logo">
                OWU Studio
            </div>
            <div className="search">
                <label><input type="text" placeholder={'search'}/></label>
            </div>
            <div className="user">
                <img src={user}
                     alt="user"/>
            </div>
        </header>
    );
};

export {Header};