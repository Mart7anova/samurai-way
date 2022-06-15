import {ActionsType} from './ActionsType';

export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
    photoURL: string
}

export type usersPagesType = typeof initialState

const initialState = {
    users: [
        {
            id: 1, followed: false, fullName: 'Anastasia', status: 'Hello world!',
            location: {city: 'St.Petersburg', country: 'Russia'},
            photoURL: 'https://img.freepik.com/free-vector/cat-vector-head-kitten-cartoon_71328-174.jpg'
        },
        {
            id: 2, followed: true, fullName: 'Andrew', status: 'Hi!',
            location: {city: 'St.Petersburg', country: 'Russia'},
            photoURL: 'https://img.freepik.com/free-vector/cat-vector-head-kitten-cartoon_71328-174.jpg'
        },
        {
            id: 3, followed: true, fullName: 'Lubov', status: 'Hi!',
            location: {city: 'Tver', country: 'Russia'},
            photoURL: 'https://img.freepik.com/free-vector/cat-vector-head-kitten-cartoon_71328-174.jpg'
        },
    ] as Array<UserType>,
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
            return {...state, users: {...state.users, ...action.users}}
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