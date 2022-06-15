import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type propsType={
}

function App(props: propsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className="App-content">
                <Route path="/profile" render={() =>
                    <Profile />}/>
                <Route path="/dialog" render={() =>
                    <DialogsContainer />}/>
            </div>
        </div>
    );
}

export default App;
