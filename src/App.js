import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {Home, MoviesDetails} from './components';

import './App.scss';

function App() {
    const {light} = useSelector(state => state['lightThemeReducer']);

    return (
        <div className={light ? 'light-body' : 'body'}>
            <Routes>
                <Route index element={<Navigate to={'/movie/page=1'}/>}/>
                <Route path={'/movie/page=:pageId'} element={<Home/>}/>
                <Route path={'/movie/page=:pageId/with_genres=:name'} element={<Home/>}/>
                <Route path={'/movie/:pageId/movie_details'} element={<MoviesDetails/>}/>
            </Routes>
        </div>
    );
}

export default App;
