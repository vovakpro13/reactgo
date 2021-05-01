import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export async function get(url) {
    const array = await api.get(url).then(array => array.data);
    return array
}



