import React from 'react';
import c from './Message.module.css'

export const Message = () => {
    return (
        <div className={c.dialogsItem}>
            <div className={c.message}>hi</div>
            <div className={c.message}>hello</div>
            <div className={c.message}>yo</div>
        </div>
    )
}