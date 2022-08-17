import React, { useEffect } from 'react'
import '../PhotoItem/PhotoItem.css'
import loupeIcon from '../../assets/icons/loupe.png'
import warsaw from '../../assets/imgs/warsaw.jpg'
import hoodie from '../../assets/imgs/hoodie.webp'

const PhotoItem = ({imgSrc, alt}) => {
    return (
        <>
            <img src={imgSrc.warsaw ? imgSrc.warsaw : imgSrc.hoodie} className='HomeBodyItemImg' alt={alt}/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
        </>
    )
}

export default PhotoItem