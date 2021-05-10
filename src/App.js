import './App.css';
import Users from "./components/Users/Users";
import {Route,Link} from "react-router-dom";
import s from './style.module.css';
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/Users/UserDetails/UserDetails";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div>
            <div className={s.menu}>
                <Link to={'/'}><h2>Main</h2></Link>
                <Link to={'/users'}><h2>Users</h2></Link>
                <Link to={'/posts'}><h2>Posts</h2></Link>
            </div>

            <div className={s.contentWrap}>
                <Route exact path={'/'} render={() => <h3 className={s.wrap}>Main page</h3>}/>
                <Route exact path={'/users'} render={({match:{url}}) => <Users url={url}/>}/>
                <Route exact path={'/users/:id'} render={({match: {params:{id}}}) =>  <UserDetails id={id}/>}/>
                <Route exact path={'/users/:id/posts'} render={({match: {params:{id}}}) =>  <Posts userId={id} />}/>
                <Route exact path={'/comments/:postId'} render={({match: {params:{postId}}}) =>  <Comments postId={postId}/>}/>
                <Route exact path={'/posts'} render={() =>  <Posts />}/>
            </div>

        </div>
    );
}

export default App;
