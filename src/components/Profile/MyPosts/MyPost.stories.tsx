import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {MyPosts} from './MyPosts';


export default {
    title: 'MyPost',
    component: MyPosts,
} as ComponentMeta<typeof MyPosts>;

//const callBack = action('clicked')

/*export const DefaultMyPost: ComponentStory<typeof MyPosts> = () =>
    <MyPosts
        posts={[
            {id: 1, message: 'I like chips', like: 20},
            {id: 1, message: 'Hello', like: 10000},
            {id: 1, message: ''},
        ]}
        newPostValue={'New Post!'}
        updateNewPostText={}
        addPost={callBack}
    />*/
