import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {getVideos} from "../../store";

const MoviesDetails = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideos({id: state.id}))
    }, [])

    return (
        <div>
            MoviesDetails
        </div>
    );
};

export {MoviesDetails};