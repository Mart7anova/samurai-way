import {ActionsType} from './ActionsType';


export type ProfilePageType = typeof initialState

const initialState = {
    posts: [
        {id: 3, message: 'I like chips', like: 20},
        {id: 2, message: 'How are you?'},
        {id: 1, message: 'Hello!', like: 50}
    ],
    newPostValue: '',
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostValue: action.newMessage}
        case 'ADD-POST':
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: 4, message: state.newPostValue}
                ],
                newPostValue: ''
            }
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
};
export type AddPostAT = ReturnType<typeof addPostAC>
export type UpdateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
export type SetUserProfileAT = ReturnType<typeof setUserProfile>

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newMessage: newText} as const)
export const setUserProfile = (profile: any) => ({type: 'SET-USER-PROFILE', profile} as const)
