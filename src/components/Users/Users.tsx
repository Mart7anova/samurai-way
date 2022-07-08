import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import UserPhoto from './../common/photo/catPhoto.png'
import axios from 'axios';

type PropsType = {
    currentPage: number
    onPageChanged: (currentPage: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: PropsType) => {
    //let pagesCount: number = Math.ceil(this.props.totalUserCount / this.props.pageSize)
    let pagesCount: number = 10
    let pages: Array<number> = []
    for (let i = 1; i < pagesCount; i++) {
        pages = [...pages, i]
    }
    return (
        <div>
            {pages.map((p, i) => (
                <span key={i}
                      className={props.currentPage === p ? s.selectPage : ''}
                      onClick={() => props.onPageChanged(p)}
                >{p} </span>
            ))}
            {props.users.map(u =>
                <div key={u.id} className={s.content}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={s.img}
                             alt={'User photo'}/>
                    </NavLink>
                    {u.followed
                        ? <button onClick={() =>
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers:{
                                    "API-KEY": "04167db9-f44d-4089-83a1-11d14204efcc"
                                },
                            })
                                .then(response => {
                                    if(response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                        }>Unfollow</button>
                        : <button onClick={() =>
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
                                withCredentials: true,
                                headers:{
                                    "API-KEY": "04167db9-f44d-4089-83a1-11d14204efcc"
                                },

                            })
                                .then(response => {
                                    if(response.data.resultCode === 0){
                                        props.follow(u.id)
                                    }
                                })
                        }>Follow</button>
                    }
                    <div className={s.userInfo}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                </div>
            )}
        </div>
    )
};
