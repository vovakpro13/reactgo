import React, {useEffect, useState} from 'react';
import {get} from "../../services/api";
import Comment from "./Comment";

const Comments = ({postId}) => {
    const [comments, setComments] = useState();
    useEffect(() => get('/comments').then(comments => setComments(comments.filter(c => c.postId === +postId))));
    return <div>{comments && comments.map(c => <Comment {...c}/>)}</div>;
};

export default Comments;