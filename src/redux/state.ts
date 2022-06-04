import {rerenderTree} from '../index';
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from './profileReducer';
import {AddMessageActionType, dialogsReducer, UpdateNewMessageTextActionType} from './dialogsReducer';

export type MyPostType = {
    id: number
    message: string
    like?: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<MyPostType>
    newPostValue: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>,
    newPostMessage: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogsPageType
}

export type StoreType={
    _state: StateType
    getState: ()=>StateType
    dispatch: (action:ActionsType)=>void
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 3, message: 'I like chips', like: 20},
                {id: 2, message: 'How are you?'},
                {id: 1, message: 'Hello!', like: 50}
            ],
            newPostValue: ''
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Ira'},
                {id: 2, name: 'Misha'},
                {id: 3, name: 'Kate'},
                {id: 4, name: 'Kiril'}
            ],
            messages: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'Hi!'},
                {id: 3, message: 'How are u?!'},
                {id: 4, message: 'Cool!'},
            ],
            newPostMessage: ''
        }
    },
    getState(){
        return this._state
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        debugger
        rerenderTree()
    }
}


export type ActionsType= AddPostActionType | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType | AddMessageActionType
