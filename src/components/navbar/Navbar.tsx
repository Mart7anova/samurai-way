import React from 'react';
import c from './Navbar.module.css'

export const Navbar=()=>{
    return(
        <div>
            <nav className={c.navbar}>
                <div className={c.item}>
                    <a href='#'>Profile</a>
                </div>
                <div className={`${c.item} ${c.active}`}>
                    <a href='#'>Message</a>
                </div>
                <div className={c.item}>
                    <a href='#'>Music</a>
                </div>
            </nav>
        </div>
    )
}