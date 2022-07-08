import {ActionsType} from './ActionsType';

export type initialStateType = typeof initialState

const initialState = {
    isLoaded: false,
}

export const preloaderReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'TOGGLE-IS-LOADING':
            return {
                ...state,
                isLoaded: action.isLoaded
            }
        default:
            return state
    }
}

export type ToggleIsLoadingAT = ReturnType<typeof toggleIsLoading>

export const toggleIsLoading = (isLoaded: boolean) => ({type: 'TOGGLE-IS-LOADING', isLoaded} as const)