import React, { useEffect } from 'react'
import '../PhotoItem/PhotoItem.css'
import loupeIcon from '../../assets/icons/loupe.png'

const PhotoItem = ({imgSrc, alt}) => {
    return (
        <>
            <img src={imgSrc} className='HomeBodyItemImg' alt={alt}/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
        </>
    )
}

export default PhotoItem