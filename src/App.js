import React from "react";

import {Navigate, Route, Routes} from "react-router-dom";
import {Home, MoviesDetails} from "./components";

import './App.scss';

function App() {
    return (
            <Routes>
                <Route index element={<Navigate to={'/movie/page=1'}/>}/>
                <Route path={'/movie/page=:pageId'} element={<Home/>}/>
                <Route path={'/movie/page=:pageId/movie_details'} element={<MoviesDetails/>}/>
            </Routes>
    );
}

export default App;
