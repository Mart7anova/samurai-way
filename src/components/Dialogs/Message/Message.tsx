import React from 'react';
import { messageType } from '../../../redux/state';
import c from './Message.module.css'


type PropsType = {
    messages: Array<messageType>
}

export const Message = (props: PropsType) => {

    let newMassageElement = React.createRef<HTMLTextAreaElement>()

    let sentMessage=()=>{
        alert(newMassageElement.current?.value)
    }

    return (
        <div className={c.dialogsItem}>
            {props.messages.map(m =>
                <div className={c.message}>
                    {m.message}
                </div>
            )}
            <div>
                <textarea ref={newMassageElement}></textarea>
            </div>
            <div>
                <button onClick={sentMessage}>Sent</button>
            </div>
        </div>
    )
}