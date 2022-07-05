import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    currentPage: number
    onPageChanged: (currentPage: number)=>void
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
                    <div>
                        {/*<img src={u.photos.small != null ? u.photos.small : UserPhoto} className={s.img} alt={'User photo'}/>*/}
                    </div>

                    {u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>
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
