import {AddPostAT, UpdateNewPostTextAT} from './profile-reducer';
import {AddMessageAT, UpdateNewMessageTextAT} from './dialogs-reducer';
import {followAT, setUsersAT, unfollowAT} from './users-reducer';

export type ActionsType =
    AddPostAT | UpdateNewPostTextAT             //profile-reducer
    | UpdateNewMessageTextAT | AddMessageAT     //dialog-reducer
    | followAT | unfollowAT | setUsersAT        //users-reducer