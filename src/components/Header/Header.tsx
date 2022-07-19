import React from 'react';
import c from './Header.module.css'
import {authType} from '../../redux/auth-reducer';
import {NavLink} from 'react-router-dom';
type PropsType = {
    data: authType
    isAuth: boolean
}

export const Header = (props: PropsType) => {
    return (
        <div className={c.header}>
            <header>
                <img src="https://t3.ftcdn.net/jpg/01/42/75/54/360_F_142755488_TJuIfZiGVrFGgC34ixLtwV8EwTUWJpDd.jpg" alt={'logo'}/>
                <div className={c.login}>
                    {props.data.id}
                    {props.isAuth
                        ? props.data.login
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </header>
        </div>
    )
}