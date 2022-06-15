import React, {ChangeEvent} from 'react';
import { MessageType } from '../../../redux/dialogsReducer';
import c from './Message.module.css'


type PropsType = {
    messages: Array<MessageType>
    newPostMessage: string
    onMessageChange: (newMessage: string)=>void
    sentMessage: ()=>void
}

export const Message = (props: PropsType) => {

    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        const newMessage=e.currentTarget.value
        props.onMessageChange(newMessage)
    }
    const sentMessageHandler=()=>{
        props.sentMessage()
    }

    return (
        <div className={c.dialogsItem}>
            {props.messages.map(m =>
                <div className={c.message}>
                    {m.message}
                </div>
            )}
            <div>
                <textarea value={props.newPostMessage} onChange={onMessageChangeHandler}></textarea>
            </div>
            <div>
                <button onClick={sentMessageHandler}>Sent</button>
            </div>
        </div>
    )
}