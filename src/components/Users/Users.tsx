import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'

export class Users extends React.Component<UsersPropsType> {

    const unfollowHandler = (id: number) => {
        props.unfollow(id)
    }
    const followHandler = (id: number) => {
        props.follow(id)
    }

    render() {
        return (
            <div>
                {this.props.users.map(u =>
                    <div key={u.id} className={s.content}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={s.img}/>
                        </div>

                        {u.followed
                            ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>
                        }
                        <div className={s.userInfo}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

