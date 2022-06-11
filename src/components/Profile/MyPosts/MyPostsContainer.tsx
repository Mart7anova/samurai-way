import React from 'react';
import { StoreType} from '../../../redux/store';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';

type PropsType = {
    store: StoreType
}



export const MyPostsContainer: React.FC<PropsType> = (props) => {
    const state = props.store.getState()

    const onPostChange = (newText: string) => {
        props.store.dispatch(updateNewPostTextAC(newText))
    }

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostValue={state.profilePage.newPostValue}
                 updateNewPostText={onPostChange}
                 addPost={addPost}/>
    )
}