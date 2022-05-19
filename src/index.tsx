import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

const posts: Array<myPostType> = [
    {id: 3, message: 'I like chips', like: 20},
    {id: 2, message: 'How are you?'},
    {id: 1, message: 'Hello! I\'m a Kitty Cat :)', like: 50},
]
const dialogs: Array<dialogsType> = [
    {id: 1, name: 'Ira'},
    {id: 2, name: 'Misha'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'Kiril'}
]
const messages: Array<messageType> = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'Hi!'},
    {id: 3, message: 'How are u?!'},
    {id: 4, message: 'Cool!'},
]


ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);