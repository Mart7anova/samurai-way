import {toggleIsLoading} from './preloader-reductor';
import {AppDispatch, AppThunk} from './redux-store';
import {userAPI} from '../api/api';

export type UsersActionType = FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | ToggleFollowInProgressAT

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
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
    followInProgress: false,
    followUsers: [] as Array<number>,
}

export const usersReducer = (state: usersPagesType = initialState, action: UsersActionType): usersPagesType => {
    switch (action.type) {
        case 'FOLLOW-SUCCESS':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW-SUCCESS':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUserCount: action.users
            }
        case 'TOGGLE-FOLLOW-IN-PROGRESS':
            return {
                ...state,
                followUsers: action.followInProgress
                    ? [...state.followUsers, action.userId]
                    : state.followUsers.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
export type FollowAT = ReturnType<typeof followSuccess>
export type UnfollowAT = ReturnType<typeof unfollowSuccess>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type ToggleFollowInProgressAT = ReturnType<typeof toggleFollowInProgress>

export const followSuccess = (userId: number) => ({type: 'FOLLOW-SUCCESS', userId} as const)
export const unfollowSuccess = (userId: number) => ({type: 'UNFOLLOW-SUCCESS', userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (users: number) => ({type: 'SET-TOTAL-USERS-COUNT', users} as const)
export const toggleFollowInProgress = (followInProgress: boolean, userId: number) => (
    {type: 'TOGGLE-FOLLOW-IN-PROGRESS', followInProgress, userId} as const
)

export const getUsers = (currentPage: number, pageSize: number): AppThunk => (dispatch: AppDispatch) => {
    dispatch(toggleIsLoading(true))
    dispatch(setCurrentPage(currentPage))
    userAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
        .finally(() => {
            dispatch(toggleIsLoading(false))
        })
}
export const follow = (useId: number): AppThunk => (dispatch: AppDispatch) => {
    dispatch(toggleFollowInProgress(true, useId))
    userAPI.follow(useId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(useId))
            }
            dispatch(toggleFollowInProgress(false, useId))
        })
}
export const unfollow = (useId: number): AppThunk => (dispatch: AppDispatch) => {
    dispatch(toggleFollowInProgress(true, useId))
    userAPI.unfollow(useId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(useId))
            }
            dispatch(toggleFollowInProgress(false, useId))
        })
}