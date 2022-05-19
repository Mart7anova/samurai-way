import React from 'react';
import c from './Message.module.css'
import {messageType} from '../../../index';


type PropsType = {
    messages: Array<messageType>
}

export const Message = (props: PropsType) => {
    return (
        <div className={c.dialogsItem}>
            {props.messages.map(m =>
                <div className={c.message}>
                    {m.message}
                </div>
            )}
        </div>
    )
}