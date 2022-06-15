import React from 'react';
import {NavLink} from 'react-router-dom';
import {DialogsType} from '../../../redux/dialogs-reducer';
import c from './DialogItem.module.css'

type PropsType = {
    dialogs: Array<DialogsType>
}

export const DialogItem: React.FC<PropsType> = (props) => {
    return (
        <div className={c.dialogsItem}>
            <div>
                {props.dialogs.map(el =>
                    <NavLink to={'/dialog/' + el.id} key={el.id} className={c.dialog + ' ' + c.active}>
                        <div>
                            {el.name}
                        </div>
                    </NavLink>
                )}
            </div>
        </div>
    )
}