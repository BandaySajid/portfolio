import React from 'react';
import Contact from './Contact.js';
import Skills from './Skills.js';

const Sidebar = () => {
    return (
        <div className='sidebar' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 5px', background: '#161B22', borderRadius: '0.2rem', height: '100%' }}>
            <img src="img/me.jpg" alt="" loading='lazy' style={{ height: '12rem', borderRadius: '100%' }} />
            <Contact></Contact>
            <Skills></Skills>
            <button className='btn mt-5' id='workBtn' style={{ background: '#0D1117' }}>
                <a href="mailto: admin@sajidbanday.in" style={{ color: 'white', textDecoration: 'none' }} target='_blank'>Work With Me</a>
            </button>
        </div>
    )
};

export default Sidebar;
