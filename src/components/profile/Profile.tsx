import React from 'react';
import c from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile=()=>{
    return(
        <div>
            <div className={c.content}>
                <img src="https://img.freepik.com/free-vector/cat-vector-head-kitten-cartoon_71328-174.jpg"/>
                Kitty Cat
                <MyPosts/>
            </div>
        </div>
    )
}