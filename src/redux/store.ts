import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {ActionsType} from './ActionsType';

type MyPostType = {
    id: number
    message: string
    like?: number
}
type DialogsType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type ProfilePageType = {
    posts: Array<MyPostType>
    newPostValue: string
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>,
    newPostMessage: string
}
type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogsPageType
}

type StoreType = {
    _state: StateType
    getState: () => StateType
    dispatch: (action: ActionsType) => void
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
}


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 3, message: 'I like chips', like: 20},
                {id: 2, message: 'How are you?'},
                {id: 1, message: 'Hello!', like: 50}
            ],
            newPostValue: ''
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Ira'},
                {id: 2, name: 'Misha'},
                {id: 3, name: 'Kate'},
                {id: 4, name: 'Kiril'}
            ],
            messages: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'Hi!'},
                {id: 3, message: 'How are u?!'},
                {id: 4, message: 'Cool!'},
            ],
            newPostMessage: ''
        }
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._callSubscriber()
    },
    _callSubscriber() {
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    }

}

