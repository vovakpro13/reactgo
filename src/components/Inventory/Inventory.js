import React, {useEffect, useState} from 'react';
import {getInventory} from "../../services/api";
import Element from "./Element/Element";
import style from './Inventory.module.css';

const Inventory = ({url}) => {
    const [inventory, setInventory] = useState(null);
    useEffect(() => getInventory().then(i => setInventory(i)));
    return (
        < div className={style.inventoryWrapperDiv}>
            <h2>Inventory</h2>
            {
                inventory ?
                    <div className={style.inventoryWrapper}>
                        {inventory.map(i => <Element {...i} url={url}/>)}
                    </div>
                    : <p>loading...</p>
            }
        </div>
    );
};

export default Inventory;