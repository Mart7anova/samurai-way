import React from 'react';
import c from './Post.module.css'

export const Post=()=>{
    return(
        <div>
            <div className={c.content}>
                <img src="https://img.freepik.com/free-vector/cat-vector-head-kitten-cartoon_71328-174.jpg"/>
                Hello! I'm a Kitty Cat :)
            </div>
        </div>
    )
}