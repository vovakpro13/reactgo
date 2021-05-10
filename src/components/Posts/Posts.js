import s from '../../style.module.css';
import {useEffect, useState} from "react";
import {get} from "../../services/api";
import Post from "./Post";

function Posts({userId, url}) {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [detailsPost, setDetailsPost] = useState();
    const [author, setAuthor] = useState();


    useEffect(() => get('/posts')
        .then(posts => {
            setPosts(userId ? posts.filter(p => p.userId === +userId) : posts);
        }), []);

    useEffect(() => get('/users')
        .then(u => setUsers(u)), []);

    let detialsBlock, authorBlock;

    if (detailsPost) {
        const author = users.filter(user => user.id === detailsPost.userId)[0];

        detialsBlock = <div className={s.details}>
            <h2>Post #{detailsPost.id}</h2>
            <div><h3>Title </h3><span className={s.t}>{detailsPost.title}</span></div>
            <br/>
            <div><h3>Body</h3><em>{detailsPost.body}</em></div>
            <br/>
            <div><b>Author:</b> <a onClick={() => setAuthor(author)} className={s.author} href={`#`}>{author.name}</a>
            </div>
        </div>
    }

    if (author) {
        authorBlock = <div className={s.details}>
            <h2>Author is {author.name}</h2>
            <div><b>E-mail:</b> {author.email}</div>
            <div><b>UserName:</b> {author.username}</div>
            <div><b>Website:</b> {author.website}</div>
            <div><b>Phone:</b> {author.phone}</div>
        </div>

    }

    return (
        <div>
            {
                userId && <h3>#{userId} user posts</h3>
            }
            <div className={s.rowDiv}>

                <div className={s.posts}>
                    {
                        posts.map(post => <Post key={post.id} post={post} setDetailsPost={setDetailsPost}
                                                setAuthor={setAuthor} url={url}/>)
                    }
                </div>
                <div className={s.box}>
                    {detialsBlock}
                    {authorBlock}
                </div>

            </div>
        </div>
    );
}

export default Posts;