import React from 'react';
import c from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type PropsType = {
    profile: any,
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <div className={c.content}>
                <ProfileInfo profile={props.profile}
                             status={props.status}
                             updateStatus={props.updateStatus}
                />
                <MyPostsContainer/>
            </div>
        </div>
    )
}