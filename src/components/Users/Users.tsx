import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import UserPhoto from './../../images/userPhoto.png'


export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCountAC(response.data.totalCount)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
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
                          className={this.props.currentPage === p ? s.selectPage : ''}
                          onClick={() => this.onPageChanged(p)}
                    >{p} </span>
                ))}
                {this.props.users.map(u =>
                    <div key={u.id} className={s.content}>
                        <div>
                            {/*<img src={u.photos.small != null ? u.photos.small : UserPhoto} className={s.img} alt={'User photo'}/>*/}
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

