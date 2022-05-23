import React from 'react';
import c from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {myPostType, updateNewPostText} from '../../redux/state';

type PropsType = {
    posts: Array<myPostType>
    newPostValue: string
    updateNewPostText: (newPostValue: string)=>void
    addPost:()=>void
}

export const Profile=(props: PropsType)=>{
    return(
        <div>
            <div className={c.content}>
                <ProfileInfo/>
                <MyPosts posts={props.posts} newPostValue={props.newPostValue} updateNewPostText={updateNewPostText} addPost={props.addPost}/>
            </div>
        </div>
    )
}