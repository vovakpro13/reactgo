import './App.css';
import Menu from "./components/Menu/Menu";
import {Route, Switch} from 'react-router-dom';
import Characters from "./components/Characters/characters";
import Inventory from "./components/Inventory/Inventory";
import CharacterAbout from "./components/Characters/CharacterAbout/CharacterAbout";
import InventoryAbout from "./components/Inventory/InventoryAbout/InventoryAbout";

function App() {
    return (
        <div>
            <Menu/>
            <Switch>
                <Route exact={true} path={'/characters'} render={({match: {url}}) => <Characters url={url}/>}/>
                <Route exact={true} path={'/characters/:id'} render={({match: { params: {id}}}) => <CharacterAbout  id={id}/>}/>
                <Route exact={true} path={'/inventar'} render={({match: {url}}) => <Inventory url={url}/>} />
                <Route exact={true} path={'/inventar/:id'} render={({match: { params: {id}}}) => <InventoryAbout id={id}/>} />
            </Switch>
        </div>
    );
}

export default App;
