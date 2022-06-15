import React from 'react';
import c from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import { DialogsPageType } from '../../redux/dialogsReducer';

type PropsType = {
    dialogPage: DialogsPageType
    onMessageChange: (newMessage: string) => void
    sentMessage: () => void
}

export const Dialogs = (props: PropsType) => {
    return (
        <div className={c.dialogs}>
            <DialogItem dialogs={props.dialogPage.dialogs}/>
            <div className={c.messages}>
                <Message messages={props.dialogPage.messages}
                         newPostMessage={props.dialogPage.newPostMessage}
                         onMessageChange={props.onMessageChange}
                         sentMessage={props.sentMessage}/>
            </div>
        </div>
    )
}