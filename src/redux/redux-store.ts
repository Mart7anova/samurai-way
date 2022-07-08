import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfileActionType, profileReducer} from './profile-reducer';
import {DialogsActionsType, dialogsReducer} from './dialogs-reducer';
import {UsersActionType, usersReducer} from './users-reducer';
import {AuthActionType, authReducer} from './auth-reducer';
import {PreloaderActionType, preloaderReducer} from './preloader-reductor';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'

export type AppStateType = ReturnType<typeof rootReducer>
export type AppActionType = UsersActionType
    | AuthActionType
    | DialogsActionsType
    | PreloaderActionType
    | ProfileActionType

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionType>


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    preloader: preloaderReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store