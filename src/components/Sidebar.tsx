import React from 'react';
import './components.css'

export const Sidebar=()=>{
    return(
        <div>
            <nav className='sidebar'>
                <div>
                    <a href='#'>Profile</a>
                </div>
                <div>
                    <a href='#'>Message</a>
                </div>
            </nav>
        </div>
    )
}