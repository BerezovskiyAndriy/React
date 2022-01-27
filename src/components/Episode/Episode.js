import React from 'react';
import {Link} from "react-router-dom";

const Episode = ({episode,characters}) => {

    return (
        <div>
            {episode.name}
            <Link to={`/character/${episode.id}`} state={characters}>
                details
            </Link>
        </div>
    );
};

export default Episode;