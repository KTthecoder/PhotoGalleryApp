import React from 'react'
import '../HomePage/HomePage.css'
import { Link, useNavigate } from 'react-router-dom'
import warsaw from '../../assets/imgs/warsaw.jpg'
import hoodie from '../../assets/imgs/hoodie.webp'
import PhotoItem from '../../components/PhotoItem/PhotoItem'

const HomePage = () => {

  const navigate = useNavigate()

  const items = [
      {id: '1', imgSrc: {warsaw}, alt: 'Warsaw'},
      {id: '2', imgSrc: {warsaw}, alt: 'Warsaw'},
      {id: '3', imgSrc: {hoodie}, alt: 'Hoodie'},
      {id: '4', imgSrc: {warsaw}, alt: 'Warsaw'},
      {id: '5', imgSrc: {warsaw}, alt: 'Warsaw'},
      {id: '6', imgSrc: {warsaw}, alt: 'Warsaw'},
      {id: '7', imgSrc: {hoodie}, alt: 'Hoodie'},
      {id: '8', imgSrc: {hoodie}, alt: 'Hoodie'},
      {id: '9', imgSrc: {warsaw}, alt: 'Warsaw'},
      {id: '10', imgSrc: {warsaw}, alt: 'Warsaw'},
      {id: '11', imgSrc: {hoodie}, alt: 'Hoodie'},
      {id: '12', imgSrc: {warsaw}, alt: 'Warsaw'},
  ]

  const items1 = [
      {id: '1', imgSrc: {warsaw}, alt: 'Warsaw'},
      {id: '2', imgSrc: {hoodie}, alt: 'Hoodie'},
      {id: '3', imgSrc: {warsaw}, alt: 'Warsaw'},
      {id: '4', imgSrc: {warsaw}, alt: 'Warsaw'},
      {id: '5', imgSrc: {warsaw}, alt: 'Hoodie'},
      {id: '6', imgSrc: {warsaw}, alt: 'Warsaw'},
  ]

  return (
    <div className='HomeContainer'>
      <div className='HomeBanner'>

      </div>
      <div className='HomeBody'>
        <div className='HomeBodyCountDiv'>
            <p><span>34+</span> photos on website</p>
        </div>
        <div className='HomeBodyCategoriesDiv'>
          <Link to='/gallery/all' className='HomeBodyCategory'>All</Link>
          <Link to='/gallery/cities' className='HomeBodyCategory'>Cities</Link>
          <Link to='/gallery/interior' className='HomeBodyCategory'>Interiors</Link>
          <Link to='/gallery/clothes' className='HomeBodyCategory'>Clothes</Link>
          <Link to='/gallery/people' className='HomeBodyCategory'>People</Link>
        </div>
        <div className='HomeBodyItems'>
          {items && items.map((item) => (
            <div className='HomeBodyItem' key={item.id}>
              <PhotoItem imgSrc={item.imgSrc} alt={item.alt} />    
            </div>
          ))}
        </div>
        <div className='HomeBodyItemsMore'>
          <p className='HomeBodyItemsMoreBtn' onClick={() => navigate("/gallery/all")}>Show More</p>
        </div>
      </div>
      <div className='HomeScrollBanner'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget sodales libero.</h2>
      </div>
      <div className='HomeNewestHeader'>
        <h1>Newest <span>photos.</span></h1>
      </div>
      <div className='HomeBodyItems'>
        {items1 && items1.map((item) => (
          <div className='HomeBodyItem' key={item.id}>
            <PhotoItem imgSrc={item.imgSrc} alt={item.alt} />    
          </div>
        ))}
      </div>
      <div className='HomeBodyItemsMore'>
          <p className='HomeBodyItemsMoreBtn' onClick={() => navigate("/gallery/all")}>See All</p>
        </div>
    </div>
  )
}

export default HomePage