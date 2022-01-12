import React, {useEffect, useState} from 'react';

import SpaceXComponent from "./SpaceXComponent";

const SpaceX = () => {
    const [spaceX,setSpaceX] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setSpaceX(value.filter(value => value.launch_year !== '2020')))
    },[])
    return (
        <div className={'wrap'}>
            {
                spaceX.map(value =>
                        <SpaceXComponent
                            key={value.flight_number}
                            mission_name={value.mission_name}
                            launch_year={value.launch_year}
                            mission_patch_small={value.links.mission_patch_small}
                        />)
            }
        </div>
    );
};

export default SpaceX;