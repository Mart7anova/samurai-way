import React from 'react';
import c from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

export const Navbar=()=>{
    return(
        <div>
            <nav className={c.navbar}>
                <div className={c.item}>
                    <NavLink to='/profile' activeClassName={c.active}>Profile</NavLink>
                </div>
                <div className={`${c.item} ${c.active}`}>
                    <NavLink to='/dialog' activeClassName={c.active}>Message</NavLink>
                </div>
                <div className={`${c.item} ${c.active}`}>
                    <NavLink to='/users' activeClassName={c.active}>Users</NavLink>
                </div>
                <div className={`${c.item} ${c.active}`}>
                    <a href={''}>Music</a>
                </div>
            </nav>
        </div>
    )
}