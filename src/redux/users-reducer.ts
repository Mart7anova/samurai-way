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
    isFetching: false,
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
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}
export type FollowAT = ReturnType<typeof follow>
export type UnfollowAT = ReturnType<typeof unfollow>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCount = (users: number) => ({type: 'SET_TOTAL_USERS_COUNT', users} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const)