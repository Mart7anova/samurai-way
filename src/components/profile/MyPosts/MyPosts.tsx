import React from 'react';
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts=()=>{
    return(
        <div>
            <div className={c.content}>
                <h3>My posts</h3>
                <Post/>
            </div>
        </div>
    )
}