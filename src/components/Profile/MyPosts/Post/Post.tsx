import React from 'react';
import c from './Post.module.css'

type PostPropsType = {
    message: string
    like?: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={c.content}>
                <img src='https://img.freepik.com/free-vector/cat-vector-head-kitten-cartoon_71328-174.jpg'/>
                {props.message}
            </div>
            like: {props.like}
        </div>
)
}