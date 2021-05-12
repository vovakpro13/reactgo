import React, {useEffect, useState} from 'react';
import {getInventoryElement} from "../../../services/api";

const InventoryAbout = ({id}) => {
    const [inventoryElement, setInventoryElement] = useState(null);
    useEffect(() => getInventoryElement(id).then(i => setInventoryElement(i[0])), []);

    return (
        <div>
            <h3>Inventory element #{id}</h3>
            {
                inventoryElement
                    ? <div>
                        <h4>{inventoryElement.title}</h4>
                        <div><b>category:</b> {inventoryElement.category}</div>
                        <div><b>description:</b> {inventoryElement.description}</div>
                        {inventoryElement.slogan && <div><b>slogan:</b> {inventoryElement.slogan}</div>}
                        <div><b>price:</b> {inventoryElement.price}</div>
                        <div><b>stock:</b> {inventoryElement.stock}</div>
                    </div>
                    : <p>loading...</p>
            }
        </div>
    );
};

export default InventoryAbout;