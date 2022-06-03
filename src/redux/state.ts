import {rerenderTree} from '../index';


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
        if(action.type === 'ADD-POST'){
            this._state.profilePage.posts.unshift({id: 4, message: this._state.profilePage.newPostValue})
            this._state.profilePage.newPostValue = ''
            rerenderTree()
        } else
            if(action.type === 'ADD-MESSAGE'){
            this._state.dialogPage.messages.push({id: 5, message: this._state.dialogPage.newPostMessage})
            this._state.dialogPage.newPostMessage = ''
            rerenderTree()
        } else
            if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostValue = action.newText
            rerenderTree()
        } else
            if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.dialogPage.newPostMessage = action.newText
            rerenderTree()
        }
    }
}
type AddPostActionType = ReturnType<typeof addPostAC>
type AddMessageActionType = ReturnType<typeof addMessageAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>

export type ActionsType= AddPostActionType | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType | AddMessageActionType

export const addPostAC = () => ({type:'ADD-POST'} as const)
export const addMessageAC = () => ({type:'ADD-MESSAGE'} as const)
export const updateNewPostTextAC = (newText: string) => ({type:'UPDATE-NEW-POST-TEXT', newText} as const)
export const updateNewMessageTextAC = (newText: string) => ({type:'UPDATE-NEW-MESSAGE-TEXT', newText} as const)
