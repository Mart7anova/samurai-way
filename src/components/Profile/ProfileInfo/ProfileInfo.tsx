import React from 'react';
import UserPhoto from './../../common/photo/catPhoto.png'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';

type PropsType = {
    profile: any
}

export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile.photos.small ? props.profile.photos.small : UserPhoto} alt={'User'}/>
            <h1>{props.profile.fullName}</h1>
            <ProfileStatus value={'Hello'}/>
            <hr/>

            <div>Обо мне: {props.profile['aboutMe']}</div>
        </div>
    )
}