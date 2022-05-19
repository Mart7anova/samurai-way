import React from 'react';
import {myPostType} from '../../..';
import c from './MyPosts.module.css'
import {Post} from './Post/Post';

type PropsType = {
    posts: Array<myPostType>
}

export const MyPosts = (props:PropsType) => {
    return (
        <div>
            <div className={c.content}>
                <h3>My posts</h3>
                <Post posts={props.posts}/>
            </div>
        </div>
    )
}