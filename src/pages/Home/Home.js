import {useSelector} from 'react-redux';

import {Header, MovieList} from '../../components';

import './Home.scss';

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