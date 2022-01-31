import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCars} from "../../store";

import './Car.css';

const Car = ({car: {id, model, price, year}}) => {
    const dispatch = useDispatch();

    return (
        <div className={'car'}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
                <button onClick={() => dispatch(deleteCars({id}))}>Delete</button>
            </div>
        </div>
    );
};

export {Car};