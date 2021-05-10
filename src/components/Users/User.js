import s from '../../style.module.css';
import {Link} from "react-router-dom";

const User = ({user:{name, email, id}, url}) =>{
    return (
        <div className={s.wrap} id={`user${id}`}>
            <div>
                <div><strong>Name:</strong> {name}</div>
                <div><strong>E-mail:</strong> <em>{email}</em></div>
            </div>
            <div className={s.userMenu}>
                <Link to={url + '/' + id}>Details</Link>
                <Link to={url + '/' + id + '/posts'}>Posts</Link>
            </div>
        </div>
    );
}

export default User;