import React from 'react';
import {NavLink} from 'react-router-dom';
import { dialogsType } from '../../../redux/state';
import c from './DialogItem.module.css'

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