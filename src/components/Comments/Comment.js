import React from 'react';
import s from '../../style.module.css';

const Comment = ({name, email, body}) => {
    return (
        <div className={s.commentDiv}>
            <div><h4>{email}</h4></div>
            <div>{name}</div>
            <div>{body}</div>
        </div>
    );
};

export default Comment;