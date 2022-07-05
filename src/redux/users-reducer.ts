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
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
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
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUserCount: action.users
            }
        default:
            return state
    }
}
export type FollowAT = ReturnType<typeof followAC>
export type UnfollowAT = ReturnType<typeof unfollowAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCountAC = (users: number) => ({type: 'SET_TOTAL_USERS_COUNT', users} as const)