import {AddPostAT, SetUserProfileAT, UpdateNewPostTextAT} from './profile-reducer';
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
    AddPostAT | UpdateNewPostTextAT | SetUserProfileAT             //profile-reducer
    | UpdateNewMessageTextAT | AddMessageAT     //dialog-reducer
    | FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT       //users-reducer