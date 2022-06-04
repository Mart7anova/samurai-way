import {ActionsType, DialogsPageType} from './state';

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
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
