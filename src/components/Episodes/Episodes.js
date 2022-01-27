import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import {episodesService} from "../../services/episodes.service";
import Episode from "../Episode/Episode";


const Episodes = () => {
   const {id} = useParams();

   const [episode,setEpisode] = useState([]);
   const [lastPage,setLastPage] = useState(null);

    useEffect(() => {
        episodesService.getByPage(id).then(value => {
            setLastPage(value.info.pages)
            setEpisode(value.results)
        })
    }, [id])

    console.log(lastPage);
    return (
        <div>
            {episode.map(value => <Episode key={value.id} episode={value} characters={value.characters}/>)}
            <Link to={`/episode/${+id+1}`}>
                {+id === +lastPage ? <button disabled={true}>Click</button> : <button>Click</button>}
            </Link>
        </div>
    );
};

export default Episodes;