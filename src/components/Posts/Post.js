import s from '../../style.module.css';

function Post({post, setDetailsPost, setAuthor}) {
    const {id, title} = post
    return (
        <div className={s.post}>
            <h4>Post #{id}</h4>
            <div><strong>Title: </strong><em >{title}</em></div><br/>
            <a className={s.moreBtn} href={'#'} onClick={() => {setDetailsPost(post); setAuthor()}}>Show more</a>
            <a className={s.moreBtn}  href={'/comments/' + id}>Comments for {id} post</a>
        </div>
    );
}

export default Post;