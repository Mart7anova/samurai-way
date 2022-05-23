import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {addPost, state, updateNewPostText} from './redux/state';


function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className="App-content">
                <Route path="/profile" render={() =>
                    <Profile posts={state.profilePage.posts}
                             newPostValue={state.profilePage.newPostValue}
                             updateNewPostText={updateNewPostText}
                             addPost={addPost}
                    />}/>
                <Route path="/dialog" render={() =>
                    <Dialogs dialogs={state.dialogPage.dialogs}
                             messages={state.dialogPage.messages}/>}/>
            </div>
        </div>
    );
}

export default App;
