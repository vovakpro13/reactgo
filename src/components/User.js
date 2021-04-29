import userStyle from './user.module.css';

function User(props) {
    const {id, email, name,setUsers, users} = props;

    return (
        <div className={userStyle.user}>
            <table>
                <tr>
                    <th>  {id} User:</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th>E-mail:</th>
                    <td>{email}</td>
                </tr>
            </table>
            <button onClick={() => {setUsers(users.filter(u => u.id !== id))}}>Delete {name}</button>
        </div>
    );
}

export default User;