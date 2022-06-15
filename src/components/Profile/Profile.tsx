import React from 'react';
import c from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type PropsType = {

}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <div className={c.content}>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        </div>
    )
}