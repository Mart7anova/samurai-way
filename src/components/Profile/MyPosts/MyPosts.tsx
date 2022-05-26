import React, {ChangeEvent} from 'react';
import {myPostType} from '../../../redux/state';
import c from './MyPosts.module.css'
import {Post} from './Post/Post';

type PropsType = {
    posts: Array<myPostType>
    newPostValue: string
    updateNewPostText: (newPostValue: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<PropsType> = (props) => {

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)

    }

    let addPostHandler = () => {
        props.addPost()
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