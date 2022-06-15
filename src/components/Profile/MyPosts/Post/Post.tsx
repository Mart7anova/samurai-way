import React from 'react';
import c from './Post.module.css'
import {PostType} from '../../../../redux/profileReducer';

type PropsType = {
    posts: Array<PostType>
}

export const Post = (props: PropsType) => {
    return (
        <div>
            {props.posts.map(p => (
                <div>
                    <div className={c.content}>
                        <img src="https://img.freepik.com/free-vector/cat-vector-head-kitten-cartoon_71328-174.jpg"/>
                        <span>{p.message}</span>
                    </div>
                    <div className={c.like}>Like: {p.like}</div>
                </div>
            ))}
        </div>
    )
}