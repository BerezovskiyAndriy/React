import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {axiosService} from "../../services/axios.service";
import {characterService} from "../../services/character.service";

const Characters = () => {
   const {state} = useLocation();
   const [charactersIds,setCharactersIds] = useState('');
   const [characters,setCharacters] = useState([]);

   useEffect(() => {
       const urlCharacter = state.map(value => value.split('/').splice(5));
       setCharactersIds(urlCharacter.toString())
   },[charactersIds.length])

   useEffect(() => {
       characterService.character(charactersIds).then(value => setCharacters(value))
   },[charactersIds])

    console.log(characters);
    return (
        <div>
            Characters
        </div>
    );
};

export default Characters;