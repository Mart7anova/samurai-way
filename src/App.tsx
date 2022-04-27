import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Profile} from "./components/profile/Profile";
import {Navbar} from "./components/navbar/Navbar";


function App() {
    return (
        <div className="App">
            <div className="grid">
                    <Header/>
                    <Profile/>
                    <Navbar/>
            </div>
        </div>
    );
}

export default App;
