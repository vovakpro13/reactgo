import React from 'react';
import {Link} from "react-router-dom";
import  style from './links.module.css';

const Links = () => {
    return (
        <div className={style.linksWrapper}>
            <Link to={'/characters'}>Characters</Link>
            <Link to={'/inventar'}>Inventory</Link>
        </div>
    );
};

export default Links;