import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import c from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

const users =[
    {id:1, name: 'Ira'},
    {id:2, name: 'Misha'},
    {id:3, name: 'Kate'},
    {id:4, name: 'Kiril'}
]


export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
                <DialogItem users={users}/>
            <div className={c.messages}>
                <Message/>
            </div>
        </div>
    )
}