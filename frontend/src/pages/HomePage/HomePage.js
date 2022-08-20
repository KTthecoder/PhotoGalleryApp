import React, { useEffect, useState } from 'react'
import '../HomePage/HomePage.css'
import { useNavigate } from 'react-router-dom'
import PhotoItem from '../../components/PhotoItem/PhotoItem'
import useFetch from '../../hooks/useFetch'
import GetCookie from '../../components/GetCookie'

const HomePage = () => {

  const navigate = useNavigate()

  const [page, setPage] = useState('all')
  const [photosByCategory, setPhotosByCategory] = useState([])

  const [ newestPhotos ] = useFetch('http://127.0.0.1:8000/api/photos/newest', 'GET')

  useEffect(() => {
      const csrftoken = GetCookie('csrftoken');
      if(page === 'all'){
        fetch(`http://127.0.0.1:8000/api/photos/newest`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken,
          }
          })
          .then(res => res.json())
          .then((data) => {
              setPhotosByCategory(data)
              console.log(data)
          })
          .catch(err => console.log("Error, ", err))
      }
      else{
        fetch(`http://127.0.0.1:8000/api/photos/categories/${page}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken,
          }
          })
          .then(res => res.json())
          .then((data) => {
              setPhotosByCategory(data)
              console.log(data)
          })
          .catch(err => console.log("Error, ", err))
      }
  }, [page])

  return (
    <div className='HomeContainer'>
      <div className='HomeBanner'>

      </div>
      <div className='HomeBody'>
        <div className='HomeBodyCountDiv'>
            <p><span>34+</span> photos on website</p>
        </div>
        <div className='HomeBodyCategoriesDiv'>
          {page == 'all' ? 
            <>
              <p className='HomeBodyCategory' style={{borderBottom: '1px solid black'}} onClick={() => setPage('all')}>All</p>
              <p className='HomeBodyCategory' onClick={() => setPage('cities')}>Cities</p>
              <p className='HomeBodyCategory' onClick={() => setPage('interiors')}>Interiors</p>
              <p className='HomeBodyCategory' onClick={() => setPage('clothes')}>Clothes</p>
              <p className='HomeBodyCategory' onClick={() => setPage('people')}>People</p>
            </>
           
          : page == 'cities' ? 
            <>
              <p className='HomeBodyCategory' onClick={() => setPage('all')}>All</p>
              <p className='HomeBodyCategory' style={{borderBottom: '1px solid black'}} onClick={() => setPage('cities')}>Cities</p>
              <p className='HomeBodyCategory' onClick={() => setPage('interiors')}>Interiors</p>
              <p className='HomeBodyCategory' onClick={() => setPage('clothes')}>Clothes</p>
              <p className='HomeBodyCategory' onClick={() => setPage('people')}>People</p>
            </>
          : page == 'interiors' ? 
            <>
              <p className='HomeBodyCategory' onClick={() => setPage('all')}>All</p>
              <p className='HomeBodyCategory' onClick={() => setPage('cities')}>Cities</p>
              <p className='HomeBodyCategory' style={{borderBottom: '1px solid black'}} onClick={() => setPage('interiors')}>Interiors</p>
              <p className='HomeBodyCategory' onClick={() => setPage('clothes')}>Clothes</p>
              <p className='HomeBodyCategory' onClick={() => setPage('people')}>People</p>
            </>
          : page == 'clothes' ? 
            <>
              <p className='HomeBodyCategory' onClick={() => setPage('all')}>All</p>
              <p className='HomeBodyCategory' onClick={() => setPage('cities')}>Cities</p>
              <p className='HomeBodyCategory' onClick={() => setPage('interiors')}>Interiors</p>
              <p className='HomeBodyCategory' style={{borderBottom: '1px solid black'}} onClick={() => setPage('clothes')}>Clothes</p>
              <p className='HomeBodyCategory' onClick={() => setPage('people')}>People</p>
            </>
          : page == 'people' ? 
            <>
              <p className='HomeBodyCategory' onClick={() => setPage('all')}>All</p>
              <p className='HomeBodyCategory' onClick={() => setPage('cities')}>Cities</p>
              <p className='HomeBodyCategory' onClick={() => setPage('interiors')}>Interiors</p>
              <p className='HomeBodyCategory' onClick={() => setPage('clothes')}>Clothes</p>
              <p className='HomeBodyCategory' style={{borderBottom: '1px solid black'}}  onClick={() => setPage('people')}>People</p>
            </>
          : ''}
        </div>
        <div className='HomeBodyItems'>
          {photosByCategory['response'] === 'There is not any photos in database' ? 
            <div className='HomeBodyItemsEmpty'>
              <h1>There's no photos in this category</h1>
            </div>
          : 
            photosByCategory && photosByCategory.map((item) => (
              <div className='HomeBodyItem' key={item.id}>
                <PhotoItem imgSrc={"http://127.0.0.1:8000" + item.img} alt={item.alt} />    
              </div>
            ))
          }
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
        {newestPhotos && newestPhotos.map((item) => (
          <div className='HomeBodyItem' key={item.id}>
            <PhotoItem imgSrc={"http://127.0.0.1:8000" + item.img} alt={item.alt} />    
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