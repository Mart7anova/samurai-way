import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'

export const Users = (props: UsersPropsType) => {

    const unfollowHandler = (id: number) => {
        props.unfollow(id)
    }
    const followHandler = (id: number) => {
        props.follow(id)
    }
    return (
        <div>
            {props.users.map(u =>
                <div key={u.id} className={s.content}>
                    <div>
                        <img src={u.photoURL} className={s.img}/>
                    </div>

                    {u.followed
                        ? <button onClick={() => unfollowHandler(u.id)}>Unfollow</button>
                        : <button onClick={() => followHandler(u.id)}>Follow</button>
                    }
                    <div className={s.userInfo}>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                        <div>
                            {u.location.city},
                            {u.location.country}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
