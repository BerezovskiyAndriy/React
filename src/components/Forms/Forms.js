import React, {useReducer, useState} from 'react';

import Animal from "../Animal/Animal";

import './Forms.css';

export const actions = {
    add_animal: 'add-animal',
    delete_animal: 'delete-animal'
}

const Forms = ( {title} ) => {

    function reducer (animals, action) {
        switch (action.type) {
            case actions.add_animal:
               return action.payload.name ? [ ...animals, newAnimal(action.payload.name) ] : animals
            case actions.delete_animal:
                return animals.filter(animal => animal.id !== action.payload.id)
            default:
                return animals
        }
    }

    function newAnimal (name) {
        return {
            id: Date.now(),
            name: name
        }
    }

    const [animals, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    function handleSubmit (e) {
        e.preventDefault()
        dispatch( {type: actions.add_animal, payload: {name: name} } )
        setName('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={'form'}>
                <h3>{title}</h3>
                <input type="text" value={name} onChange={ (e) => setName(e.target.value) }/>
                <button>Save</button>
            </form>

            { animals.map(animal => <Animal key={animal.id} animal={animal} dispatch={dispatch}/>) }
        </div>
    );
};

export default Forms;