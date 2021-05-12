import React, {useEffect, useState} from 'react';
import {getCharacters} from "../../services/api";
import Character from "./Character/Character";
import style from './characters.module.css';

const Characters = ({url}) => {
    const [characters, setCharacters] = useState();
    useEffect(() => getCharacters().then(c => setCharacters(c)), []);

    return (
        <div className={style.charactersWrapperDiv}>
            <h2>Characters</h2>
            <div className={style.charactersWrapper}>
                {
                    characters ?
                        characters.map(character => <Character key={character.id} {...character} url={url}/>)
                        : <p>loading...</p>
                }
            </div>
        </div>

    );
};

export default Characters;