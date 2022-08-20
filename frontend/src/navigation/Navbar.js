import React, { useState } from 'react'
import '../navigation/Navbar.css'
import fbIcon from '../assets/icons/facebook.png'
import igIcon from '../assets/icons/instagram.png'
import pinIcon from '../assets/icons/pinterest.png'
import tiktokIcon from '../assets/icons/tiktok.png'
import menuIcon from '../assets/icons/menu.png'
import closeIcon from '../assets/icons/close.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [show, setShow] = useState(false)

    const navigate = useNavigate()

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
                <h1 onClick={() => navigate('/')}>photos.</h1>
                <div className='NavbarMidImgDiv'>
                    <img src={menuIcon} className='NavbarIconn' alt='Menu Icon' onClick={() => setShow(true)} />
                    {/* <a href="https://www.flaticon.com/free-icons/open-menu" title="open menu icons">Open menu icons created by Pixel perfect - Flaticon</a> */}
                </div>
            </div>
            <div className='NavbarRight'>
                <NavLink to={"/gallery"} className={({isActive}) => (isActive ? "NavbarLinkActive" : "NavbarLinkUnActive")}>Gallery</NavLink>
                <NavLink to={"/contact"} className={({isActive}) => (isActive ? "NavbarLinkActive" : "NavbarLinkUnActive")}>Contact</NavLink>
                {/* <Link to='/gallery' className='NavbarLink'>Gallery</Link> */}
                {/* <Link to='/contact' className='NavbarLink'>Contact</Link> */}
            </div>
            <div className='NavbarRight1' style={show ? {display: 'flex'} : {display: 'none'}}>
                <div className='NavbarRightImgDiv'>
                    <img src={closeIcon} className='NavbarIcon1' alt='Close Icon' onClick={() => setShow(false)}/>
                    {/* <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Pixel perfect - Flaticon</a> */}
                </div>
                {/* <Link to='/gallery' className='NavbarLink1'>Gallery</Link>
                <Link to='/contact' className='NavbarLink1'>Contact</Link> */}
                <NavLink to={"/gallery"} className={({isActive}) => (isActive ? "NavbarLink1Active" : "NavbarLink1UnActive")}>Gallery</NavLink>
                <NavLink to={"/contact"} className={({isActive}) => (isActive ? "NavbarLink1Active" : "NavbarLink1UnActive")}>Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar