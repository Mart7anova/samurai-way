import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";

type propsType = {}

function App(props: propsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className="App-content">
                <Route path="/profile" render={() =>
                    <ProfileContainer />}/>
                <Route path="/dialog" render={() =>
                    <DialogsContainer/>}/>
                <Route path="/users" render={() =>
                    <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
