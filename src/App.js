import React, {useEffect} from "react";

import './App.scss';
import {axiosService} from "./services/axios.service";
import {urls} from "./config/urls";

function App() {

    useEffect(() => {
        (async () => {
           const res = await axiosService.get(urls.movie + '/550/videos')
            console.log(res);
            return res;
        })()
    },[])

    return (
        <div className="App">

        </div>
    );
}

export default App;
