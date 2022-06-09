import React  from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Post} from './Post';


export default {
    title: 'Post',
    component: Post,
}as ComponentMeta<typeof Post>;


export const DefaultPost: ComponentStory<typeof Post> = () => <Post posts={[{id:1, message: 'I like chips', like: 20}]}/>
export const EmptyPost: ComponentStory<typeof Post> = () => <Post posts={[{id:2, message: ''}]}/>
export const BigPost: ComponentStory<typeof Post> = () => <Post posts={[{id:3, message: 'I like chips I like chips I like chips I like chips I like chips I like chips I like chips I like chips I like chips'}]}/>
