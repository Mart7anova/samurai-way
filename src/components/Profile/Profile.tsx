import React from 'react';
import c from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, MyPostType} from '../../redux/state';

type PropsType = {
    posts: Array<MyPostType>
    newPostValue: string
    dispatch: (action: ActionsType)=>void
}

export const Profile=(props: PropsType)=>{
    return(
        <div>
            <div className={c.content}>
                <ProfileInfo/>
                <MyPosts posts={props.posts}
                         newPostValue={props.newPostValue}
                         dispatch={props.dispatch} />
            </div>
        </div>
    )
}