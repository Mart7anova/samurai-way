import React, {ChangeEvent} from 'react';
import {ActionsType, addMessageAC, MyPostType, updateNewPostTextAC} from '../../../redux/state';
import c from './MyPosts.module.css'
import {Post} from './Post/Post';

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
        props.dispatch(addMessageAC())
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