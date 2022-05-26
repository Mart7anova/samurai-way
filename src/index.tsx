import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, state, updateNewPostText} from './redux/state';

export const rerenderTree = () =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} updateNewPostText={updateNewPostText} addPost={addPost} />
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderTree()


