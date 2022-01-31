import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../../components/Header/Header";

import './HomePage.css';

const HomePage = () => {
    return (
        <div className={'wrap'}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {HomePage};