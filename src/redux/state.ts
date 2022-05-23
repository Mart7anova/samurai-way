import {rerenderTree} from '../render';


export type myPostType = {
    id: number
    message: string
    like?: number
}
export type dialogsType = {
    id: number
    name: string
}
export type messageType = {
    id: number
    message: string
}
export type profilePageType = {
    posts: Array<myPostType>
    newPostValue: string
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}
export type stateType = {
    profilePage: profilePageType
    dialogPage: dialogsPageType
}

export const state: stateType = {
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
    }
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostValue = newText
    rerenderTree(state)
}


export const addPost = () => {
    state.profilePage.posts.unshift({id: 4, message: state.profilePage.newPostValue})
    state.profilePage.newPostValue = ''
    rerenderTree(state)
}

// const posts: Array<myPostType> = [
//     {id: 3, message: 'I like chips', like: 20},
//     {id: 2, message: 'How are you?'},
//     {id: 1, message: 'Hello! I\'m a Kitty Cat :)', like: 50},
// ]
// const dialogs: Array<dialogsType> = [
//     {id: 1, name: 'Ira'},
//     {id: 2, name: 'Misha'},
//     {id: 3, name: 'Kate'},
//     {id: 4, name: 'Kiril'}
// ]
// const messages: Array<messageType> = [
//     {id: 1, message: 'Hello!'},
//     {id: 2, message: 'Hi!'},
//     {id: 3, message: 'How are u?!'},
//     {id: 4, message: 'Cool!'},
// ]