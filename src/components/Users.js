import User from "./User";


function Users(props) {
    const {users, setUsers} = props;

    return (
        <div>
            {
                users.map(user => <User key={user.id} id={user.id} name={user.name} email={user.email} setUsers={setUsers} users={users}/> )
            }
        </div>

    );
}

export default Users;