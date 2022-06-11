import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {ActionsType, StateType} from './redux/store';

type propsType={
    state: StateType
    dispatch: (action:ActionsType)=>void
    store: any
}

function App(props: propsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className="App-content">
                <Route path="/profile" render={() =>
                    <Profile store={props.store}/>}/>
                <Route path="/dialog" render={() =>
                    <Dialogs store={props.store}/>}/>
            </div>
        </div>
    );
}

export default App;
