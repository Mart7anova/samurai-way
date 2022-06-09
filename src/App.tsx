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
}

function App(props: propsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className="App-content">
                <Route path="/profile" render={() =>
                    <Profile posts={props.state.profilePage.posts}
                             newPostValue={props.state.profilePage.newPostValue}
                             dispatch={props.dispatch}
                    />}/>
                <Route path="/dialog" render={() =>
                    <Dialogs dialogs={props.state.dialogPage.dialogs}
                             newPostMessage = {props.state.dialogPage.newPostMessage}
                             messages={props.state.dialogPage.messages}
                             dispatch={props.dispatch}
                    />}/>
            </div>
        </div>
    );
}

export default App;
