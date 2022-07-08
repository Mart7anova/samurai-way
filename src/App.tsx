import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';

type propsType = {}

function App(props: propsType) {
    return (
        <div className="App">
            <HeaderContainer />
            <Navbar/>
            <div className="App-content">
                <Route path="/profile/:userId?" render={() =>
                    <ProfileContainer />}/>
                <Route path="/dialog" render={() =>
                    <DialogsContainer/>}/>
                <Route path="/users" render={() =>
                    <UsersContainer/>}/>
                <Route path="/login" render={() =>
                    <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
