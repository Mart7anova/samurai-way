import {ActionsType, DialogsPageType} from './store';

const initialState = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type){
        case 'ADD-MESSAGE':
            state.messages.push({id: 5, message: state.newPostMessage})
            state.newPostMessage = ''
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newPostMessage = action.newText
            return state
        default:
            return state
    }
};
export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>

export const addMessageAC = () => ({type:'ADD-MESSAGE'} as const)
export const updateNewMessageTextAC = (newText: string) => ({type:'UPDATE-NEW-MESSAGE-TEXT', newText} as const)
