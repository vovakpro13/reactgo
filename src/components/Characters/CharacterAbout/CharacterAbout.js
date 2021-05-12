import React, {useEffect, useState} from 'react';
import {getCharacter} from "../../../services/api";

const CharacterAbout = ({id}) => {
    const [character, setCharacter] = useState(null);
    useEffect(() => getCharacter(id).then(c => setCharacter(c[0])), []);

    return (
        <div>
            <h3>About #{id} character</h3>
            {
                character
                    ? <div>
                        <h3>{character.name}</h3>
                        <div><a href={character.bio.url}>BIO</a></div>
                        <div>Born: {character.born}</div>
                        {
                            character.died && <div>Died: {character.born}</div>
                        }


                    </div>
                    : <p>loading...</p>
            }
        </div>
    );
};

export default CharacterAbout;