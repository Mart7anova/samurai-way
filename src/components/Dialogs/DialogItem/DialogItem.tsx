import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './DialogItem.module.css'
import {dialogsType} from '../../../index';

type PropsType = {
    dialogs: Array<dialogsType>
}

export const DialogItem: React.FC<PropsType> = (props) => {
    return (
        <div className={c.dialogsItem}>
            <div>
                {props.dialogs.map(el =>
                    <NavLink to={'/dialog/' + el.id} className={c.dialog + ' ' + c.active}>
                        <div>
                            {el.name}
                        </div>
                    </NavLink>
                )}
            </div>
        </div>
    )
}