import React from 'react';
import Links from "./Links/Links";
import style from './menu.module.css';

const Menu = () => {
    return (
        <div className={style.wrapper}>
            <h4 className={style.title}>Menu</h4>
            <Links />
        </div>
    );
};

export default Menu;