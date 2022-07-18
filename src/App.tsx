import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/Login';

function App() {
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
                    <Login/>}/>
            </div>
        </div>
    );
}

export default App;
