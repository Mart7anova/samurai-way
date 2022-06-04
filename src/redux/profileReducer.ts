import {ActionsType, ProfilePageType} from './state';

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type){
        case 'ADD-POST':
            state.posts.unshift({id: 4, message: state.newPostValue})
            state.newPostValue = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostValue = action.newText
            return state
        default:
            return state
    }
};
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => ({type:'ADD-POST'} as const)
export const updateNewPostTextAC = (newText: string) => ({type:'UPDATE-NEW-POST-TEXT', newText} as const)
