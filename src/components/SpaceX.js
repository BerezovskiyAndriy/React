import React, {useEffect, useState} from 'react';

import SpaceXComponent from "./SpaceXComponent";

const SpaceX = () => {
    const [SpaceX,setSpaceX] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setSpaceX(value))
    },[])
    return (
        <div className={'wrap'}>
            {
                SpaceX.map(value =>
                    value.launch_year < 2020 ?
                        <SpaceXComponent
                            mission_name={value.mission_name}
                            launch_year={value.launch_year}
                            mission_patch_small={value.links.mission_patch_small}
                        /> : '')
            }
        </div>
    );
};

export default SpaceX;