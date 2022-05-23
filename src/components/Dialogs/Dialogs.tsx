import React from 'react';
import c from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {dialogsType, messageType} from '../../redux/state';

type PropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}

export const Dialogs = (props:PropsType) => {
    return (
        <div className={c.dialogs}>
            <DialogItem dialogs={props.dialogs}/>
            <div className={c.messages}>
                <Message messages={props.messages}/>
            </div>
        </div>
    )
}