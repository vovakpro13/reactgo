import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export  function get(url) {
    return api(url).then(array => array.data)
}



