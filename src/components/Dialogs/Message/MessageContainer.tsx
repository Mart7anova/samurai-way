import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../../redux/dialogsReducer';
import {Message} from './Message';


type PropsType = {
    store: any
}

export const MessageContainer = (props: PropsType) => {
    const state = props.store.getState()

    const onMessageChange = (newMessage: string) =>{
        props.store.dispatch(updateNewMessageTextAC(newMessage))
    }
    const sentMessage=()=>{
        props.store.dispatch(addMessageAC())
    }

    return (
        <Message messages={state.dialogPage.messages}
                 newPostMessage={state.dialogPage.newPostMessage}
                 onMessageChange={onMessageChange}
                 sentMessage={sentMessage}/>
    )
}