import {AddPostAT, UpdateNewPostTextAT} from './profile-reducer';
import {AddMessageAT, UpdateNewMessageTextAT} from './dialogs-reducer';
import {
    FollowAT,
    SetCurrentPageAT,
    SetTotalUsersCountAT,
    SetUsersAT,
    ToggleIsFetchingAT,
    UnfollowAT
} from './users-reducer';

export type ActionsType =
    AddPostAT | UpdateNewPostTextAT             //profile-reducer
    | UpdateNewMessageTextAT | AddMessageAT     //dialog-reducer
    | FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT       //users-reducer