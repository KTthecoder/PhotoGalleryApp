import React from 'react'
import '../GalleryPage/GalleryPage.css'
import warsaw from '../../assets/imgs/warsaw.jpg'
import hoodie from '../../assets/imgs/hoodie.webp'
import PhotoItem from '../../components/PhotoItem/PhotoItem'
import loupeIcon from '../../assets/icons/loupe.png'
import { NavLink } from 'react-router-dom'

const GalleryPage = () => {
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

  return (
    <div className='GalleryContainer'>
      <div className='GalleryHeader'>
        <div className='GalleryHeaderInpDiv'>
          <img src={loupeIcon} className='GalleryHeaderInpIcon' alt='Loupe Icon' />
          <input type='text' className='GalleryHeaderInp' placeholder='Search for photos...' />
        </div>
        <div className='GalleryHeaderCategoriesDiv'>
          <NavLink to={"/gallery/all"} className={({isActive}) => (isActive ? "GalleryHeaderCategoryActive" : "GalleryHeaderCategoryUnActive")}>All</NavLink>
          <NavLink to={"/gallery/cities"} className={({isActive}) => (isActive ? "GalleryHeaderCategoryActive" : "GalleryHeaderCategoryUnActive")}>Cities</NavLink>
          <NavLink to={"/gallery/interior"} className={({isActive}) => (isActive ? "GalleryHeaderCategoryActive" : "GalleryHeaderCategoryUnActive")}>Interiors</NavLink>
          <NavLink to={"/gallery/clothes"} className={({isActive}) => (isActive ? "GalleryHeaderCategoryActive" : "GalleryHeaderCategoryUnActive")}>Clothes</NavLink>
          <NavLink to={"/gallery/people"} className={({isActive}) => (isActive ? "GalleryHeaderCategoryActive" : "GalleryHeaderCategoryUnActive")}>People</NavLink>
        </div>
      </div>
      <div className='GalleryBody'>
        {items && items.map((item) => (
          <div className='HomeBodyItem' key={item.id}>
            <PhotoItem imgSrc={item.imgSrc} alt={item.alt} />    
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryPage