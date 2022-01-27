import React from 'react';

import { actions } from "../Forms/Forms";

import './Animal.css';

const Animal = ({ animal, dispatch }) => {
    return (
        <div className={'animal'}>
            <div>{animal.name}</div>
            <button onClick={() => dispatch( { type: actions.delete_animal, payload: {id: animal.id} })}>delete</button>
        </div>
    );
};

export default Animal;