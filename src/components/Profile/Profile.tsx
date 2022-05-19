import React from 'react';
import c from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {myPostType} from '../../index';

type PropsType = {
    posts: Array<myPostType>
}

export const Profile=(props: PropsType)=>{
    return(
        <div>
            <div className={c.content}>
                <ProfileInfo/>
                <MyPosts posts={props.posts}/>
            </div>
        </div>
    )
}