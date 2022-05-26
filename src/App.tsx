import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {stateType} from './redux/state';

type propsType={
    state: stateType
    updateNewPostText: (newPostValue:string)=>void
    addPost: ()=>void
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
                             updateNewPostText={props.updateNewPostText}
                             addPost={props.addPost}
                    />}/>
                <Route path="/dialog" render={() =>
                    <Dialogs dialogs={props.state.dialogPage.dialogs}
                             messages={props.state.dialogPage.messages}/>}/>
            </div>
        </div>
    );
}

export default App;
