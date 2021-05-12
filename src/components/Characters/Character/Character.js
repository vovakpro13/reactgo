import React from 'react';
import style from './character.module.css';

const Character = ({name, id, url}) => {
    return (
        <div className={style.characterWrapper}>
            <h4>{name}</h4>
            <a href={`${url}/${id}`}>about</a>
        </div>
    );
};

export default Character;