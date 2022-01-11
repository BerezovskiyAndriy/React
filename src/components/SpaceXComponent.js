import React from 'react';

import './SpaceX.css'

const SpaceXComponent = (props) => {
    const {mission_name,launch_year,mission_patch_small} = props;
    return (
        <div className={'item'}>
            <div className="title">
                <h1>{mission_name}</h1>
                <p>{launch_year}</p>
            </div>
                <img src={mission_patch_small}
                     alt={mission_name}/>
        </div>
    );
};

export default SpaceXComponent;