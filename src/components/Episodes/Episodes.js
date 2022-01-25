import React, {useEffect, useState} from 'react';
import {episodesService} from "../../services/episodes.service";
import Episode from "../Episode/Episode";

const Episodes = () => {
    const [episode,setEpisode] = useState(null);

    useEffect(() => {
        episodesService.then(value => setEpisode(value))
    },[])

    console.log(episode);
    return (
        <div>

        </div>
    );
};

export default Episodes;