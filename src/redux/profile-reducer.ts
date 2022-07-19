import {AppDispatch, AppThunk} from './redux-store';
import {profileAPI} from '../api/api';


export type ProfileActionType = AddPostAT
    | UpdateNewPostTextAT
    | SetProfileAT
    | SetStatusAT

export type ProfilePageType = typeof initialState

const initialState = {
    posts: [
        {id: 3, message: 'I like chips', like: 20},
        {id: 2, message: 'How are you?'},
        {id: 1, message: 'Hello!', like: 50}
    ],
    newPostValue: '',
    profile: null,
    status: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostValue: action.newMessage}
        case 'ADD-POST':
            return {
                ...state,
                posts: [
                    {id: 4, message: state.newPostValue},
                    ...state.posts

                ],
                newPostValue: ''
            }
        case 'SET-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
};
export type AddPostAT = ReturnType<typeof addPostAC>
export type UpdateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
export type SetProfileAT = ReturnType<typeof setProfile>
export type SetStatusAT = ReturnType<typeof setStatus>

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newMessage: newText} as const)
export const setProfile = (profile: any) => ({type: 'SET-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)


export const getProfile = (userId?: string): AppThunk => (dispatch: AppDispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setProfile(data))
        })
}

export const getStatus = (userId?: string): AppThunk => (dispatch: AppDispatch) => {
    profileAPI.geStatus(userId)
        .then(data => {
            dispatch(setStatus(data))
        })
}

export const updateStatus = (status: string): AppThunk => (dispatch: AppDispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
}