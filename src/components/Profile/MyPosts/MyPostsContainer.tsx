import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {ActionsType, StateType} from '../../../redux/store';


const mapStateToProps = (state: StateType) =>{
    return{
        posts: state.profilePage.posts,
        newPostValue: state.profilePage.newPostValue
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => void) =>{
    return{
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)