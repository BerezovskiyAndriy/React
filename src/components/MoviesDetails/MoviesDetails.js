import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getVideos} from "../../store";

import './MoviesDetails.scss';

const MoviesDetails = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();
    const {genreList,videos} = useSelector(state1 => state1['movieReducer']);

    const urlImg = `https://image.tmdb.org/t/p/original${state.poster_path}`;
    // const urlVideo = `https://www.youtube.com/embed/${videos.results[0].key}`;

    useEffect(() => {
        dispatch(getVideos({id: state.id}))
    }, [])

    const genreDetails = [];

    genreList.map(genre => state.genre_ids.includes(genre.id) ? genreDetails.push(genre.name) : '')

    return (
        <div className={'details-wrap'} style={{ background: `url(${urlImg}) no-repeat`, 'background-size': 'cover' }}>
            <div className={'main'}>
                <div className={'content'}>
                    <div className={'img'}>
                        <img src={urlImg}
                             alt="poster"/>
                    </div>
                    <div className={'text'}>
                        <h1>{state.title}</h1>
                        {
                            <div className={'genre-names'}>{genreDetails.map(name => <div className={'genre-name'} key={name}>{name}</div>)}</div>
                        }
                        <div className={'description'}>{state.overview}</div>
                        <div className={'date-average'}>
                            <div>{state.release_date}</div>
                            <div>&#9734; {state.vote_average}</div>
                        </div>
                    </div>
                </div>
                {/*<iframe src={urlVideo}>Official trailer</iframe>*/}
            </div>
        </div>
    );
};

export {MoviesDetails};