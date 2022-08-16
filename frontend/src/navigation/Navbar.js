import React, { useState } from 'react'
import '../navigation/Navbar.css'
import fbIcon from '../assets/icons/facebook.png'
import igIcon from '../assets/icons/instagram.png'
import pinIcon from '../assets/icons/pinterest.png'
import tiktokIcon from '../assets/icons/tiktok.png'
import menuIcon from '../assets/icons/menu.png'
import closeIcon from '../assets/icons/close.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <nav className='NavbarContainer'>
            <div className='NavbarLeft'>
                <img src={fbIcon} className='NavbarIcon' alt='Facebook Icon' />
                {/* <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a> */}
                <img src={igIcon} className='NavbarIcon' alt='Instagram Icon' />
                {/* <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a> */}
                <img src={pinIcon} className='NavbarIcon' alt='Pinterest Icon' />
                {/* <a href="https://www.flaticon.com/free-icons/pinterest" title="pinterest icons">Pinterest icons created by Pixel perfect - Flaticon</a> */}
                <img src={tiktokIcon} className='NavbarIcon' alt='Tiktok Icon' />
                {/* <a href="https://www.flaticon.com/free-icons/tiktok" title="tiktok icons">Tiktok icons created by Freepik - Flaticon</a> */}
            </div>
            <div className='NavbarMid'>
                <div className='NavbarMidImgDiv'>
                    <div className='NavbarIconn'></div>
                </div>
                <h1>photos.</h1>
                <div className='NavbarMidImgDiv'>
                    <img src={menuIcon} className='NavbarIconn' alt='Menu Icon' onClick={() => setShow(true)} />
                    {/* <a href="https://www.flaticon.com/free-icons/open-menu" title="open menu icons">Open menu icons created by Pixel perfect - Flaticon</a> */}
                </div>
            </div>
            <div className='NavbarRight'>
                <Link to='/galery' className='NavbarLink'>Gallery</Link>
                <Link to='/contact' className='NavbarLink'>Contact</Link>
            </div>
            <div className='NavbarRight1' style={show ? {display: 'flex'} : {display: 'none'}}>
                <div className='NavbarRightImgDiv'>
                    <img src={closeIcon} className='NavbarIconn' alt='Close Icon' onClick={() => setShow(false)}/>
                    {/* <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Pixel perfect - Flaticon</a> */}
                </div>
                <Link to='/galery' className='NavbarLink1'>Gallery</Link>
                <Link to='/contact' className='NavbarLink1'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar