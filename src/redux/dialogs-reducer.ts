import {ActionsType} from './ActionsType';

export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type DialogsPageType = typeof initialState

const initialState = {
    dialogs: [
        {id: 1, name: 'Ira'},
        {id: 2, name: 'Misha'},
        {id: 3, name: 'Kate'},
        {id: 4, name: 'Kiril'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'How are u?!'},
        {id: 4, message: 'Cool!'},
    ] as Array<MessageType>,
    newPostMessage: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newPostMessage: action.newMessage}
        case 'ADD-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: state.newPostMessage}],
                newPostMessage: ''
            }
        default:
            return state
    }
};
export type AddMessageAT = ReturnType<typeof addMessageAC>
export type UpdateNewMessageTextAT = ReturnType<typeof updateNewMessageTextAC>

export const addMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
export const updateNewMessageTextAC = (newText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessage: newText
} as const)
