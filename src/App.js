import './App.css';
import Users from "./components/Users";
import {useState} from "react";
import style from './components/user.module.css';

//Всім, привіт, додатково до дз зробіть по counter кнопки -
// increment, decrement, reset(тобто коли натискаєте
// на кнопко то counter = 0), а також кнопки increment + 100, decrement - 100

const usersA = [
    {id: 1, name: 'Olya', email:"kjj@gmail.com"},
    {id: 2, name: 'Petro', email:"kjderj@gmail.com"},
    {id: 3, name: 'Ann', email:"kjvfcvfcj@gmail.com"},
    {id: 4, name: 'Galyna', email:"kjjvvfgvgf@gmail.com"}
]
function App(props) {

    const [users, setUsers] = useState(usersA);
    let [counter, setCounter] = useState(0);

    return (
        <div className={style.row}>
            <Users users={users} setUsers={setUsers}/>
            <div>
                <h4>Counter: {counter}</h4>
                <button onClick={() => setCounter(++counter) }>Increment</button>
                <button onClick={() => setCounter(--counter) }>Decrement</button>
                <button onClick={() => setCounter(0) }>Reset</button>
                <button onClick={() => setCounter(counter += 100) }>Increment +100</button>
                <button onClick={() => setCounter(counter -= 100) }>Decrement -100</button>
            </div>
        </div>
    );
}

export default App;
