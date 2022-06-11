import React from 'react';
import c from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {MessageContainer} from './Message/MessageContainer';

type PropsType = {
    store: any
}

export const Dialogs = (props:PropsType) => {
    return (
        <div className={c.dialogs}>
            <DialogItem dialogs={props.store.getState().dialogPage.dialogs}/>
            <div className={c.messages}>
                <MessageContainer store={props.store}/>
            </div>
        </div>
    )
}