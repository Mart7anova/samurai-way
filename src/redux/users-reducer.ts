import {ActionsType} from './ActionsType';

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large : string | null
    }
    status: string | null
    followed: boolean
}

export type usersPagesType = typeof initialState

const initialState = {
    users: [] as Array<UserType>,
}

export const usersReducer = (state: usersPagesType = initialState, action: ActionsType): usersPagesType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u=>u.id === action.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u=>u.id === action.userId ? {...u, followed: false} : u)}
        case 'SET_USERS':
            return {...state, users: action.users}
        default:
            return state
    }
}
export type followAT = ReturnType<typeof followAC>
export type unfollowAT = ReturnType<typeof unfollowAC>
export type setUsersAT = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)