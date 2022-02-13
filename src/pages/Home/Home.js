import {Header, MovieList} from "../../components";

import './Home.scss';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const Home = () => {
    const {light} = useSelector(state => state['lightThemeReducer']);

    return (
        <div className={'main'}>
            <Header/>
            <div className={'container'}>
                <div className={light ? 'light-wrap-movies' : null}><MovieList/></div>
            </div>
        </div>
    );
};

export {Home};