import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {dialogsType, messageType, myPostType} from './index';

type PropsType = {
    posts: Array<myPostType>
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}

function App(props:PropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className="App-content">
                    <Route path="/profile" render={()=><Profile posts={props.posts}/>}/> {/*<Dialogs/>*/}
                    <Route path="/dialog" render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/> {/*<Dialogs/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
