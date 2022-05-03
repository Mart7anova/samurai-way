import React from 'react';
import c from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts=()=>{
    return(
        <div>
            <div className={c.content}>
                <h3>My posts</h3>
                <Post message={`I like chips`} like={20}/>
                <Post message={`How are you?`} />
                <Post message={`Hello! I'm a Kitty Cat :)`} like={50}/>
            </div>
        </div>
    )
}