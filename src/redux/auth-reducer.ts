import {ActionsType} from './ActionsType';

export type authType = {
    email: string | null
    id: number | null
    login: string | null
}
type initialStateType = typeof initialState

const initialState = {
    data: {
        email: null,
        id: null,
        login: null,
    } as authType,
    isFetching: false,
    isAuth: false,
}

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                data: action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export type SetAuthUserDataAT = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (email: string, id: number, login: string,) => (
    {type: 'SET-USER-DATA', data: {email, id, login}} as const
)
