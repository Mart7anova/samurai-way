import React, {ChangeEvent} from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../../redux/dialogsReducer';
import {ActionsType, MessageType} from '../../../redux/state';
import c from './Message.module.css'


type PropsType = {
    messages: Array<MessageType>
    newPostMessage: string
    dispatch: (action: ActionsType)=>void
}

export const Message = (props: PropsType) => {

    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        const newText=e.currentTarget.value
        props.dispatch(updateNewMessageTextAC(newText))
    }
    const sentMessageHandler=()=>{
        props.dispatch(addMessageAC())
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