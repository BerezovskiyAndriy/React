import {Header, MovieList} from "../../components";

import './Home.scss';
import {Outlet} from "react-router-dom";

const Home = () => {
    return (
        <div className={'main'}>
            <Header/>
            <div className={'container'}>
                <Outlet/>
                <div><MovieList/></div>
            </div>
        </div>
    );
};

export {Home};