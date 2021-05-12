import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://api.sampleapis.com/futurama/'
})

export const getCharacters = () =>{
    return apiInstance.get('cast').then(responce => responce.data);
}

export const getCharacter = (id) =>{
    return getCharacters().then(characters => characters.filter(c => c.id === +id) );
}

export const getInventory= () =>{
    return apiInstance.get('/inventory').then(responce => responce.data);
}

export const getInventoryElement = (id) =>{
    return getInventory().then(inventory => inventory.filter(i => i.id === +id));
}