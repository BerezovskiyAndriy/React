import React from "react";

import './App.scss';
import {Route, Routes} from "react-router-dom";
import {Home, MovieList} from "./components";

function App() {
    return (
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/movie:id'} element={<MovieList/>}/>
            </Routes>
    );
}

export default App;
