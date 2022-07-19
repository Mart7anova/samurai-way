import {AppDispatch, AppThunk} from './redux-store';
import {profileAPI} from '../api/api';


export type ProfileActionType = AddPostAT
    | UpdateNewPostTextAT
    | SetUserProfileAT
    | SetUserProfileStatusAT

export type ProfilePageType = typeof initialState

const initialState = {
    posts: [
        {id: 3, message: 'I like chips', like: 20},
        {id: 2, message: 'How are you?'},
        {id: 1, message: 'Hello!', like: 50}
    ],
    newPostValue: '',
    profile: null,
    profileStatus: '',
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
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-USER-PROFILE-STATUS':
            return {
                ...state,
                profileStatus: action.status
            }
        default:
            return state
    }
};
export type AddPostAT = ReturnType<typeof addPostAC>
export type UpdateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
export type SetUserProfileAT = ReturnType<typeof setUserProfile>
export type SetUserProfileStatusAT = ReturnType<typeof setUserProfileStatus>

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newMessage: newText} as const)
export const setUserProfile = (profile: any) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setUserProfileStatus = (status: string) => ({type: 'SET-USER-PROFILE-STATUS', status} as const)


export const getUserProfile = (userId?: string): AppThunk => (dispatch: AppDispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getUserProfileStatus = (userId?: string): AppThunk => (dispatch: AppDispatch) => {
    profileAPI.geStatus(userId)
        .then(data => {
            dispatch(setUserProfileStatus(data))
        })
}