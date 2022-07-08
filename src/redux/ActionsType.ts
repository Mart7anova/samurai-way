import {AddPostAT, SetUserProfileAT, UpdateNewPostTextAT} from './profile-reducer';
import {AddMessageAT, UpdateNewMessageTextAT} from './dialogs-reducer';
import {
    FollowAT,
    SetCurrentPageAT,
    SetTotalUsersCountAT,
    SetUsersAT, ToggleFollowInProgressAT,
    UnfollowAT
} from './users-reducer';
import {SetAuthUserDataAT} from './auth-reducer';
import {ToggleIsLoadingAT} from './preloader-reductor';

export type ActionsType =
//profile-reducer
    AddPostAT | UpdateNewPostTextAT | SetUserProfileAT
//dialog-reducer
    | UpdateNewMessageTextAT | AddMessageAT
//users-reducer
    | FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT
    | SetTotalUsersCountAT | ToggleFollowInProgressAT
// auth-reducer
    | SetAuthUserDataAT
//preloader-reducer
    | ToggleIsLoadingAT