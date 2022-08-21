import React, { useEffect, useRef, useState } from 'react'
import '../GalleryPage/GalleryPage.css'
import PhotoItem from '../../components/PhotoItem/PhotoItem'
import loupeIcon from '../../assets/icons/loupe.png'
import { Navigate, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import GetCookie from '../../components/GetCookie'

const SearchPage = () => {
  const [searchPhotos, setSearchPhotos] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const { search } = useParams()

  const navigate = useNavigate()

  const focusDiv = useRef();

  useEffect(() => {
    if(focusDiv.current) focusDiv.current.focus(); 
  }, [focusDiv]);

  const SearchPhotos = () => {
    const csrftoken = GetCookie('csrftoken');
      fetch(`http://127.0.0.1:8000/api/photos/search/${search}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        }
      })
      .then(res => res.json())
      .then((data) => {
          setSearchPhotos(data)
      })
      .catch(err => console.log("Error, ", err))
  }

  const SearchPage = (value) => {
    navigate(`/search/${value}`)
  }

  useEffect(() => {
    SearchPhotos()
  }, [search])

  return (
    <div className='GalleryContainer'>
      <div className='GalleryHeader'>
        <div className='GalleryHeaderInpDiv'>
          <img src={loupeIcon} className='GalleryHeaderInpIcon' alt='Loupe Icon' />
          <input type='text' className='GalleryHeaderInp' placeholder='Search for photos...' onChange={(e) => SearchPage(e.target.value)} ref={focusDiv} />
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
        {searchPhotos && searchPhotos['response'] === 'There is no photos with this tags' ? 
            <div className='HomeBodyItemsEmpty' style={{margin: '43px 0px 100px 0px'}}>
              <h1>There's no photos with this tags</h1>
            </div>
          : 
          searchPhotos && searchPhotos.map((item) => (
              <div className='HomeBodyItem' key={item.id}>
                <PhotoItem imgSrc={"http://127.0.0.1:8000" + item.img} alt={item.alt} />    
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default SearchPage