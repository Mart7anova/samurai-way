import React from 'react';
import c from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionsType, DialogsType, MessageType} from '../../redux/state';

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    dispatch: (action: ActionsType)=>void
    newPostMessage: string
}

export const Dialogs = (props:PropsType) => {
    return (
        <div className={c.dialogs}>
            <DialogItem dialogs={props.dialogs}/>
            <div className={c.messages}>
                <Message messages={props.messages} newPostMessage={props.newPostMessage} dispatch={props.dispatch}/>
            </div>
        </div>
    )
}