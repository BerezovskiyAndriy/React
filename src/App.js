import React from "react";

import './App.scss';
import {Navigate, Route, Routes} from "react-router-dom";
import {Home, MovieList} from "./components";

function App() {
    return (
            <Routes>
                <Route index element={<Navigate to={'/movie/page=1'}/>}/>
                <Route path={'/movie/page=:pageId'} element={<Home/>}/>
            </Routes>
    );
}

export default App;
