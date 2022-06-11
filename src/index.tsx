import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store';
import {StateType} from './redux/store';


export const rerenderTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state)
})


