import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Rockets.css'

const Rockets = () => {
  const [index, setIndex] = useState(0)
  const [allRockets, setAllRockets] = useState([])

  useEffect(() => {
    const fetchAllRockets = async () => {
      const resposne = await axios.get('https://api.spacexdata.com/v3/rockets')
      setAllRockets(resposne.data)
    }
    fetchAllRockets()
  }, [])

  const rocket = allRockets[index]
  return (
    <div className='rockets'>
      <div className='rockets-wrapper'>
        <div className='rockets-title'>
          <h2>Rockets</h2>
        </div>

        <div className='rockets-slideshow'>
          {index > 0 && (
            <div
              className='rocket-left'
              onClick={() => {
                index > 0 && setIndex(index - 1)
              }}>
              <i className='fas fa-arrow-left'></i>
            </div>
          )}

          <div className='rocket-container'>
            <div className='rocket-image'>
              <img src={rocket && rocket.flickr_images[0]} alt='' />
            </div>
            <div className='rocket-details'>
              <h2>{rocket && rocket.rocket_name}</h2>
              <div>
                <span>{rocket && rocket.first_flight}</span>
                <span>{rocket && rocket.country}</span>
              </div>
              <p>{rocket && rocket.description}</p>
            </div>

            <Link to={rocket && `/rocket/${rocket.rocket_name}`}>
              <button>Read More</button>
            </Link>
          </div>

          {index < allRockets.length - 1 && (
            <div
              className='rocket-right'
              onClick={() => {
                index < allRockets.length - 1 && setIndex(index + 1)
              }}>
              <i className='fas fa-arrow-right'></i>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Rockets
