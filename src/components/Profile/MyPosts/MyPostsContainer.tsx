import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../storeContext';


type PropsType = {

}


export const MyPostsContainer: React.FC<PropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState()
                const onPostChange = (newText: string) => {
                    store.dispatch(updateNewPostTextAC(newText))
                }

                const addPost = () => {
                    store.dispatch(addPostAC())
                }
                return <MyPosts posts={state.profilePage.posts}
                                newPostValue={state.profilePage.newPostValue}
                                updateNewPostText={onPostChange}
                                addPost={addPost}/>
            }}
        </StoreContext.Consumer>
    )
}