import './Header.scss';
import user from './../../common/images/user.png'
import {Genres} from "../Genres/Genres";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {switchTheme} from "../../store";

const Header = () => {
    const {light} = useSelector(state => state['lightThemeReducer']);
    const dispatch = useDispatch();

    const onClick = e => {
        dispatch(switchTheme(e.target.checked))
    };

    return (
        <header className={light ? 'light-header' : ''}>
            <div className="logo">
                    OWU Studio
            </div>
            <Genres/>
            <div className="user">
                <input type="checkbox" className={'switch'} onClick={onClick}/>
                <img src={user}
                     alt="user"/>
            </div>
        </header>
    );
};

export {Header};