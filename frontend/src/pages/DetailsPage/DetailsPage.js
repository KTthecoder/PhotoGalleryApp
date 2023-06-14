import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './DetailsPage.css'
import closeIcon from '../../assets/icons/close.png'

const DetailsPage = () => {
  const { id } = useParams()
  const [ photo ] = useFetch(`http://127.0.0.1:8000/api/photos/${id}`, 'GET')
  const navigate = useNavigate()

  return (
    <div className='DetailsContainer'>
      <img src={closeIcon} onClick={() => navigate(-1)} className='DetailsIcon'/>
      <div className='DetailsPhotoDiv'>
        <img src={photo && "http://127.0.0.1:8000" + photo.img} className='DetailsPhoto' />
      </div>
    </div>
  )
}

export default DetailsPage