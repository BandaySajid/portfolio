import React from 'react'
import MyNavbar from './Navbar.js';
import Bio from './Bio.js';
import Projects from './Projects.js';

const Section = () => {
    return (
        <div className='w-100 p-1 main-section' style={{ display : 'flex', flexDirection : 'column', backgroundColor : '#0D1117'}}>
            <MyNavbar />
            <Bio></Bio>
            <Projects></Projects>
        </div>
    )
}

export default Section;
