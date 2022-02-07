import {Header, MovieList} from "../../components";

import './Home.scss';

const Home = () => {
    return (
        <div>
            <Header/>
            <div className={'container'}>
                <div className={'side-bar'}>
                    <h2>Side Bar</h2>
                </div>
                <div><MovieList/></div>
            </div>
        </div>
    );
};

export {Home};