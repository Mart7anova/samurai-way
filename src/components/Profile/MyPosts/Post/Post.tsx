import React from 'react';
import c from './Post.module.css'
import {PostType} from '../../../../redux/profile-reducer';

type PropsType = {
    posts: Array<PostType>
}

export const Post = (props: PropsType) => {
    return (
        <div>
            {props.posts.map(p => (
                <div key={p.id}>
                    <div className={c.content}>
                        {/*<img src="https://img.freepik.com/free-vector/cat-vector-head-kitten-cartoon_71328-174.jpg"/>*/}
                        <span>photo</span>
                        <span>{p.message}</span>
                    </div>
                    <div className={c.like}>Like: {p.like}</div>
                </div>
            ))}
        </div>
    )
}