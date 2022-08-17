import React from 'react'
import '../Footer/Footer.css'
import fbIcon from '../../assets/icons/facebookW.png'
import igIcon from '../../assets/icons/instagramW.png'
import pinIcon from '../../assets/icons/pinterestW.png'
import tiktokIcon from '../../assets/icons/tiktokW.png'

const Footer = () => {
  return (
    <div className='FooterContainer'>
      <div className='FooterLeft'>
        <div className="FooterLeftContactInfo">
            <h2>Where to Find Us</h2>
            <p>&bull; Tower, Złota 44</p>
            <p>&bull; 00-120 Warszawa</p>
        </div>  
        <div className="FooterLeftContactInfo">
            <h2>Contact Info</h2>
            <p>&bull; contact@ktthecoder.com</p>
            <p>&bull; info@ktthecoder.com</p>
        </div>
      </div>
      <div className='FooterRight'>
        <div className='FooterRightIconsHeader'>
          <h2>Our Socials</h2>
        </div>
        <div className='FooterRightIcons'>
            <img src={fbIcon} className='FooterRightIcon' alt='Facebook Icon' />
            {/* <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a> */}
            <img src={igIcon} className='FooterRightIcon' alt='Instagram Icon' />
            {/* <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a> */}
            <img src={pinIcon} className='FooterRightIcon' alt='Pinterest Icon' />
            {/* <a href="https://www.flaticon.com/free-icons/pinterest" title="pinterest icons">Pinterest icons created by Pixel perfect - Flaticon</a> */}
            <img src={tiktokIcon} className='FooterRightIcon' alt='Tiktok Icon' />
            {/* <a href="https://www.flaticon.com/free-icons/tiktok" title="tiktok icons">Tiktok icons created by Freepik - Flaticon</a> */}
        </div>
        <div className='FooterRightInfo'>
          <p>&copy; 2022 Webiste created by Ksawery Tkaczyk</p>
        </div>
      </div>
    </div>
  )
}

export default Footer