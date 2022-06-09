import React, {ChangeEvent} from 'react';
import {ActionsType, MyPostType} from '../../../redux/store';
import c from './MyPosts.module.css'
import {Post} from './Post/Post';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';

type PropsType = {
    posts: Array<MyPostType>
    newPostValue: string
    dispatch: (action: ActionsType)=>void
}



export const MyPosts: React.FC<PropsType> = (props) => {

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText=e.currentTarget.value
        props.dispatch(updateNewPostTextAC(newText))
    }

    const addPostHandler = () => {

        props.dispatch(addPostAC())
    }

    return (
        <div>
            <div className={c.content}>
                <h3>My posts</h3>
                <div>
                    <textarea value={props.newPostValue} onChange={onPostChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add</button>
                </div>
                <Post posts={props.posts}/>
            </div>
        </div>
    )
}