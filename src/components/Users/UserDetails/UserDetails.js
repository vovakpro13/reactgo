import React, {useEffect, useState} from 'react';
import {get} from "../../../services/api";
import s from '../../../style.module.css';

const UserDetails = ({id}) => {
    const [user, setUser] = useState();
    useEffect( () => get('/users')
        .then(users => setUser(users.filter(user => user.id === +id)[0])) , []);

    return (
        <div>
            {user && <div className={s.details}>
                <h2>Details for {user.name}</h2>
                <div><b>Id:</b> {user.id}</div>
                <div><b>E-mail:</b> {user.email}</div>
                <div><b>UserName:</b> {user.username}</div>
                <div><b>Website:</b> {user.website}</div>
                <div><b>Phone:</b> {user.phone}</div>
                <ul>
                    <b>Address:</b>
                    <li>City: {user.address.city}</li>
                    <li>Street: {user.address.street}</li>
                    <li>Suite: {user.address.suite}</li>
                    <li>Zipcode: {user.address.zipcode}</li>
                </ul>
            </div>}
        </div>
    );
};

export default UserDetails;