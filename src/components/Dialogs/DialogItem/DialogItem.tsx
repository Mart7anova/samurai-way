import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './DialogItem.module.css'

type headerType={
    users: Array<userType>
}

type userType={
    id:number
    name: string
}

export const DialogItem:React.FC<headerType> = (props) => {
    return (
        <div className={c.dialogsItem}>
            <div>
                    {props.users.map(el=>
                        <NavLink to={'/dialog/'+ el.id} className={c.dialog + ' ' + c.active}>
                            <div>
                                {el.name}
                            </div>
                        </NavLink>
                    )}
            </div>
        </div>
    )
}