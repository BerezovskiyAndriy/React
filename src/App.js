import React from "react";

import './App.css';
import Episodes from "./components/Episodes/Episodes";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Home/>}>
                <Route index element={<Navigate to={'episode/1'}/>}/>
                <Route path={'episode/:id'} element={<Episodes/>}/>
                <Route path={'character/:id'} element={<Characters/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
