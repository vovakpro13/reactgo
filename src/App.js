import './App.css';
import Users from "./components/Users/Users";
import {Route,Link} from "react-router-dom";
import s from './style.module.css';
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <div>
            <div className={s.menu}>
                <Link to={'/'}><h2>Main</h2></Link>
                <Link to={'/users'}><h2>Users</h2></Link>
                <Link to={'/posts'}><h2>Posts</h2></Link>
            </div>

            <div className={s.contentWrap}>
                <Route exact only path={'/'} >
                    <h3 className={s.wrap}>Main page</h3>
                </Route>
                <Route path={'/users'} >
                    <Users />
                </Route>
                <Route path={'/posts'} >
                    <Posts />
                </Route>
            </div>

        </div>
    );
}

export default App;
