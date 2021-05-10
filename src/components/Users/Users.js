import s from '../../style.module.css';
import User from "./User";
import {useEffect, useState} from "react";
import {get} from "../../services/api";

function Users({url}) {
    const [users, setUsers] = useState([]);
    useEffect( () => get('/users').then(u => setUsers(u)) , []);

    return (
        <div className={s.rowDiv}>
            <div>
                {
                    users.map(user => <User key={user.id} user={user} url={url}/>)
                }
            </div>

        </div>
    );
}

export default Users;