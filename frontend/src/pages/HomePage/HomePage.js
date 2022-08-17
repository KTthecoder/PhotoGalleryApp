import React from 'react'
import '../HomePage/HomePage.css'
import { Link } from 'react-router-dom'
import loupeIcon from '../../assets/icons/loupe.png'
import warsaw from '../../assets/imgs/warsaw.jpg'
import hoodie from '../../assets/imgs/hoodie.webp'

const HomePage = () => {
  return (
    <div className='HomeContainer'>
      <div className='HomeBanner'>

      </div>
      <div className='HomeBody'>
        <div className='HomeBodyCountDiv'>
            <p><span>34+</span> photos on website</p>
        </div>
        <div className='HomeBodyCategoriesDiv'>
          <Link to='/categories/all' className='HomeBodyCategory'>All</Link>
          <Link to='/categories/cities' className='HomeBodyCategory'>Cities</Link>
          <Link to='/categories/interior' className='HomeBodyCategory'>Interiors</Link>
          <Link to='/categories/clothes' className='HomeBodyCategory'>Clothes</Link>
          <Link to='/categories/people' className='HomeBodyCategory'>People</Link>
        </div>
        <div className='HomeBodyItems'>
          <div className='HomeBodyItem'>
            <img src={warsaw} className='HomeBodyItemImg' alt='Warsaw'/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
          </div>
          <div className='HomeBodyItem'>
            <img src={hoodie} className='HomeBodyItemImg' alt='Warsaw'/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
          </div>
          <div className='HomeBodyItem'>
            <img src={hoodie} className='HomeBodyItemImg' alt='Warsaw'/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
          </div>
          <div className='HomeBodyItem'>
            <img src={hoodie} className='HomeBodyItemImg' alt='Warsaw'/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
          </div>
          <div className='HomeBodyItem'>
            <img src={warsaw} className='HomeBodyItemImg' alt='Warsaw'/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
          </div>
          <div className='HomeBodyItem'>
            <img src={warsaw} className='HomeBodyItemImg' alt='Warsaw'/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
          </div>
          <div className='HomeBodyItem'>
            <img src={warsaw} className='HomeBodyItemImg' alt='Warsaw'/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
          </div>
          <div className='HomeBodyItem'>
            <img src={warsaw} className='HomeBodyItemImg' alt='Warsaw'/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
          </div>
          <div className='HomeBodyItem'>
            <img src={hoodie} className='HomeBodyItemImg' alt='Warsaw'/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
          </div>
          <div className='HomeBodyItem'>
            <img src={warsaw} className='HomeBodyItemImg' alt='Warsaw'/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
          </div>
          <div className='HomeBodyItem'>
            <img src={hoodie} className='HomeBodyItemImg' alt='Warsaw'/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
          </div>
          <div className='HomeBodyItem'>
            <img src={warsaw} className='HomeBodyItemImg' alt='Warsaw'/>
            <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
            {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
          </div>
        </div>
        <div className='HomeBodyItemsMore'>
          <p className='HomeBodyItemsMoreBtn'>Show More</p>
        </div>
      </div>
      <div className='HomeScrollBanner'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget sodales libero.</h2>
      </div>
      <div className='HomeNewestHeader'>
        <h1>Newest <span>photos.</span></h1>
      </div>
      <div className='HomeBodyItems'>
        <div className='HomeBodyItem'>
          <img src={warsaw} className='HomeBodyItemImg' alt='Warsaw'/>
          <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
          {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
        </div>
        <div className='HomeBodyItem'>
          <img src={hoodie} className='HomeBodyItemImg' alt='Warsaw'/>
          <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
          {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
        </div>
        <div className='HomeBodyItem'>
          <img src={warsaw} className='HomeBodyItemImg' alt='Warsaw'/>
          <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
          {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
        </div>
        <div className='HomeBodyItem'>
          <img src={warsaw} className='HomeBodyItemImg' alt='Warsaw'/>
          <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
          {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
        </div>
        <div className='HomeBodyItem'>
          <img src={warsaw} className='HomeBodyItemImg' alt='Warsaw'/>
          <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
          {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
        </div>
        <div className='HomeBodyItem'>
          <img src={hoodie} className='HomeBodyItemImg' alt='Warsaw'/>
          <img src={loupeIcon} className='HomeBodyItemIcon' alt='Loupe Icon'/>
          {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a> */}
        </div>
      </div>
      <div className='HomeBodyItemsMore'>
          <p className='HomeBodyItemsMoreBtn'>See All</p>
        </div>
    </div>
  )
}

export default HomePage