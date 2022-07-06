import React from 'react';
import UserPhoto from './../../common/photo/catPhoto.png'
import {Preloader} from "../../common/Preloader/Preloader";

type PropsType = {
    profile: any
}

export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile.photos.small ? props.profile.photos.small : UserPhoto}/>
            <h1>{props.profile.fullName}</h1>
            <div>Обо мне: {props.profile['aboutMe']}</div>
        </div>
    )
}