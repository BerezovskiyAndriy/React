import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getVideos} from "../../store";

import './MoviesDetails.scss';

const MoviesDetails = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();
    const {genreList,videos} = useSelector(state1 => state1['movieReducer']);

    useEffect(() => {
        dispatch(getVideos({id: state.id}))
    }, [])

    const genreDetails = [];
    const key = [];

    videos.results ? videos.results.map(video => key.push(video.key)) : console.log('Error');
    genreList.map(genre => state.genre_ids.includes(genre.id) ? genreDetails.push(genre.name) : '');

    const urlImg = `https://image.tmdb.org/t/p/original${state.poster_path}`;
    const urlVideo = `https://www.youtube.com/embed/${key[0]}`;

    return (
        <div className={'details-wrap'} style={{ background: `url(${urlImg}) no-repeat`, backgroundSize: 'cover'}}>
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
                        <iframe src={urlVideo} allowFullScreen>Official trailer</iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MoviesDetails};