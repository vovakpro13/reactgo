import s from '../../style.module.css';

function User({user, setDetails}) {
    const {name, email} = user;
    return (
        <div className={s.wrap} id={`user${user.id}`}>
            <div>
                <div><strong>Name:</strong> {name}</div>
                <div><strong>E-mail:</strong> <em>{email}</em></div>
            </div>
            <button onClick={() => setDetails(user)}>details</button>
        </div>
    );
}

export default User;