import {Header, MovieList} from "../../components";

import './Home.scss';

const Home = () => {
    return (
        <div className={'main'}>
            <Header/>
            <div className={'container'}>
                <div><MovieList/></div>
            </div>
        </div>
    );
};

export {Home};