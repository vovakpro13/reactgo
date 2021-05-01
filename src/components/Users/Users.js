import s from '../../style.module.css';
import User from "./User";
import {useEffect, useState} from "react";
import {get} from "../../services/api";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(async () => setUsers( await get('/users')) , []);

    const [details, setDetails] = useState();

    return (
        <div className={s.rowDiv}>
            <div>
                {
                    users.map(user => <User key={user.id} user={user} setDetails={setDetails}/>)
                }
            </div>
            {details && <div className={s.details}>
                <h2>Details for {details.name}</h2>
                <div><b>Id:</b> {details.id}</div>
                <div><b>E-mail:</b> {details.email}</div>
                <div><b>UserName:</b> {details.username}</div>
                <div><b>Website:</b> {details.website}</div>
                <div><b>Phone:</b> {details.phone}</div>
                <ul>
                    <b>Address:</b>
                    <li>Geo:
                        <ul>
                            <li>Lat: {details.address.geo.lat}</li>
                            <li>Lng: {details.address.geo.lng}</li>
                        </ul>
                    </li>
                    <li>City: {details.address.city}</li>
                    <li>Street: {details.address.street}</li>
                    <li>Suite: {details.address.suite}</li>
                    <li>Zipcode: {details.address.zipcode}</li>
                </ul>
            </div>}

        </div>
    );
}

export default Users;