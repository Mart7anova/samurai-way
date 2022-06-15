import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {AppStateType, store} from './redux/redux-store';
import {Provider} from 'react-redux';



export const rerenderTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state)
})


