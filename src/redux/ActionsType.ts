import {AddPostActionType, UpdateNewPostTextActionType} from './profileReducer';
import {AddMessageActionType, UpdateNewMessageTextActionType} from './dialogsReducer';

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType | AddMessageActionType