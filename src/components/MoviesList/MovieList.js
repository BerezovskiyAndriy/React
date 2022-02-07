import {useEffect} from "react";
import {movieService} from "../../services/movie.service";

const MovieList = () => {

    useEffect(() => {
       movieService.getAll().then(value => console.log(value.results))
    },[])

    return (
        <div>
            MovieList
        </div>
    );
};

export {MovieList};