import React from 'react'

const MyNavbar = () => {
    return (
        <div style={{height : '5%', width : '100%', background : "linear-gradient(90deg, rgba(30,34,46,1) 0%, rgba(3,25,50,1) 49%, rgba(62,68,90,1) 100%)"}}>
            <ul className='d-flex justify-content-end gap-5 p-2'  style={{background : 'linear-gradient(90deg, rgba(30,34,46,1) 0%, rgba(3,25,50,1) 49%, rgba(62,68,90,1) 100%)'}}>
                {/* <li className='nav-li'><a className='nav-item' href="/">Home</a></li> */}
                <li className='nav-li'><a className='nav-item' href="#projects">Projects</a></li>
            </ul>
        </div>
    )
}

export default MyNavbar;
