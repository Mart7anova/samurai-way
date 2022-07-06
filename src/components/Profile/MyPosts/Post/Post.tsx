import React from 'react';
import c from './Post.module.css'
import UserPhoto from './../../../common/photo/catPhoto.png'
import { PostType } from '../MyPostsContainer';

type PropsType = {
    posts: Array<PostType>
}

export const Post = (props: PropsType) => {
    return (
        <div>
            {props.posts.map(p => (
                <div key={p.id}>
                    <div className={c.content}>
                        <img src={UserPhoto}/>
                        <span>{p.message}</span>
                    </div>
                    <div className={c.like}>Like: {p.like}</div>
                </div>
            ))}
        </div>
    )
}