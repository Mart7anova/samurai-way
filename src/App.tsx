import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {Content} from "./components/Content";


function App() {
    return (
        <div className="App">
            <div className="grid">
                <div className="header">
                    <Header/>
                </div>
                <div className="content">
                    <Content/>
                </div>
                <div className="sidebar">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
}

export default App;
