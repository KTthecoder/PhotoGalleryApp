import React, { useEffect, useState } from 'react'
import '../GalleryPage/GalleryPage.css'
import PhotoItem from '../../components/PhotoItem/PhotoItem'
import loupeIcon from '../../assets/icons/loupe.png'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import GetCookie from '../../components/GetCookie'
import useFetch from '../../hooks/useFetch'

const GalleryPage = () => {
  const { slug } = useParams()
  const [photos, setPhotos] = useState([])
  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(() => {
    const csrftoken = GetCookie('csrftoken');
    if(slug === 'all'){
      fetch(`http://127.0.0.1:8000/api/photos/newest`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        }
        })
        .then(res => res.json())
        .then((data) => {
            setPhotos(data)
        })
        .catch(err => console.log("Error, ", err))
    }
    else{
      fetch(`http://127.0.0.1:8000/api/photos/categories/${slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        }
        })
        .then(res => res.json())
        .then((data) => {
            setPhotos(data)
        })
        .catch(err => console.log("Error, ", err))
    }
  }, [location])

  return (
    <div className='GalleryContainer'>
      <div className='GalleryHeader'>
        <div className='GalleryHeaderInpDiv'>
          <img src={loupeIcon} className='GalleryHeaderInpIcon' alt='Loupe Icon' />
          <input type='text' className='GalleryHeaderInp' placeholder='Search for photos...' onClick={() => navigate('/search/')} />
          {/* <div className='GalleryHeaderInp' onClick={() => navigate('/search/')}><p>Search for photos...</p></div> */}

        </div>
        <div className='GalleryHeaderCategoriesDiv'>
          <NavLink to={"/gallery/all"} className={({isActive}) => (isActive ? "GalleryHeaderCategoryActive" : "GalleryHeaderCategoryUnActive")}>All</NavLink>
          <NavLink to={"/gallery/cities"} className={({isActive}) => (isActive ? "GalleryHeaderCategoryActive" : "GalleryHeaderCategoryUnActive")}>Cities</NavLink>
          <NavLink to={"/gallery/interiors"} className={({isActive}) => (isActive ? "GalleryHeaderCategoryActive" : "GalleryHeaderCategoryUnActive")}>Interiors</NavLink>
          <NavLink to={"/gallery/clothes"} className={({isActive}) => (isActive ? "GalleryHeaderCategoryActive" : "GalleryHeaderCategoryUnActive")}>Clothes</NavLink>
          <NavLink to={"/gallery/people"} className={({isActive}) => (isActive ? "GalleryHeaderCategoryActive" : "GalleryHeaderCategoryUnActive")}>People</NavLink>
        </div>
      </div>
      <div className='GalleryBody'>
        {photos['response'] === 'There is not any photos in database' ? 
            <div className='HomeBodyItemsEmpty' style={{margin: '43px 0px 100px 0px'}}>
              <h1>There's no any photos in database</h1>
            </div>
          : 
          photos && photos.map((item) => (
              <div className='HomeBodyItem' key={item.id}>
                <PhotoItem imgSrc={"http://127.0.0.1:8000" + item.img} alt={item.alt} />    
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default GalleryPage