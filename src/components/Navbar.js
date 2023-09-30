import React from 'react'

const MyNavbar = () => {
    return (
        <div style={{height : '5%', width : '100%', background : "#161B22"}}>
            <ul className='d-flex justify-content-end gap-5 p-2'  style={{background : '#161B22'}}>
                {/* <li className='nav-li'><a className='nav-item' href="/">Home</a></li> */}
                <li className='nav-li'><a className='nav-item' href="#projects">Projects</a></li>
            </ul>
        </div>
    )
}

export default MyNavbar;
