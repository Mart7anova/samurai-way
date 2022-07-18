import React from 'react';
import c from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';

export const Dialogs = (props: DialogsPropsType) => {

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