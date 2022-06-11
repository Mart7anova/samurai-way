import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
})

export let store = createStore(reducers)