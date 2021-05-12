import React from 'react';
import style from './element.module.css';
const Element = ({title, category, id, url}) => {
    return (
        <div className={style.element}>
            <h3>{title}</h3>
            <p><em>{category}</em></p>
            <a href={`${url}/${id}`}>about</a>
        </div>
    );
};

export default Element;