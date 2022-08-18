import React from 'react'
import '../ContactPage/ContactPage.css'

const ContactPage = () => {
  return (
    <div className='ContactContainer'>
      <div className='ContactTop'>
        <div className='ContactMap'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.6732888685997!2d21.000228851577486!3d52.2311532796612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c49633d1d%3A0xaa349f21569c205!2sTower%2C%20Z%C5%82ota%2044%2C%20Z%C5%82ota%2044%2C%2000-120%20Warszawa!5e0!3m2!1spl!2spl!4v1658223622641!5m2!1spl!2spl" width="100%" height="100%" style={{border: '0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
        </div>
      </div>
      <div className='ContactBottom'>
        <div className='ContactBody'>
          {/* <div className='ContactInfoDiv'>
            <h1>Contact Info</h1>
            <p>&bull; Tower, Złota 44</p>
            <p>&bull; 00-120 Warszawa</p>
            <p>&bull; contact@ktthecoder.com</p>
            <p>&bull; info@ktthecoder.com</p>
          </div> */}
          <div className="ContactInfoDiv">
              <h2>Where to Find Us</h2>
              <p><span>&bull;</span> Tower, Złota 44</p>
              <p><span>&bull;</span> 00-120 Warszawa</p>
          </div>  
          <div className="ContactInfoDiv">
              <h2>Contact Info</h2>
              <p><span>&bull;</span> contact@ktthecoder.com</p>
              <p><span>&bull;</span> info@ktthecoder.com</p>
          </div>
        </div> 
        <div className='ContactBottomFormDiv'>
          <h1>Send us a Message</h1>
          <form className='ContactBottomForm'>
            <input type='text' className='ContactBottomFormInp' placeholder='Name*' />
            <input type='email' className='ContactBottomFormInp' placeholder='Email*' />
            <textarea placeholder='Your Message*' className='ContactBottomFormTextArea'></textarea>
            <button type='submit' className='ContactBottomFormBtn'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage