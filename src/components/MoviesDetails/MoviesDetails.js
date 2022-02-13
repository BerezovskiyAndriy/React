import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {addVideoUrl, getVideos} from '../../store';

import './MoviesDetails.scss';

const MoviesDetails = () => {
    const {genreList,videos,videosStatus,videoUrl} = useSelector(state1 => state1['movieReducer']);
    const {light} = useSelector(state => state['lightThemeReducer']);
    const {state} = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideos({id: state.id}))
    }, [state.id])

    useEffect(() => {
        if (videos.length){
            const key = videos[0].key
            dispatch(addVideoUrl(`https://www.youtube.com/embed/${key}`))
        }
    },[videosStatus,state.id])

    const genreDetails = [];

    genreList.map(genre => state.genre_ids.includes(genre.id) ? genreDetails.push(genre.name) : '');

    const urlImg = `https://image.tmdb.org/t/p/original${state.poster_path}`;

    return (
        <div className={'details-wrap'} style={{ background: `url(${urlImg}) no-repeat`, backgroundSize: 'cover'}}>
            <div className={light ? 'light-main' : 'main'}>
                <div className={'content'}>
                    <div className={'img'}>
                        <img src={urlImg}
                             alt='poster'/>
                    </div>
                    <div className={'text'}>
                        <h1>{state.title}</h1>
                        {
                            <div className={'genre-names'}>{genreDetails.map(name =>
                            <div className={light ? 'light-genre-name' : 'genre-name'} key={name}>{name}</div>)}</div>
                        }
                        <div className={'description'}>{state.overview}</div>
                        <div className={'date-average'}>
                            <div>{state.release_date}</div>
                            <div>&#9734; {state.vote_average}</div>
                        </div>
                        {
                            videos[0]?.key && <iframe src={videoUrl}
                                 allowFullScreen>Official trailer</iframe>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MoviesDetails};