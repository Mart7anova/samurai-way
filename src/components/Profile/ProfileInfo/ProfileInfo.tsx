import React from 'react';
import UserPhoto from './../../common/photo/catPhoto.png'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';

type PropsType = {
    profile: any,
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile.photos.small || UserPhoto} alt={'User'}/>
            <span>{props.profile.userId}</span>
            <h1>{props.profile.fullName}</h1>
            <ProfileStatus status={props.status}
                           updateStatus={props.updateStatus}
            />
            <hr/>

            <div>Обо мне: {props.profile['aboutMe']}</div>
        </div>
    )
}