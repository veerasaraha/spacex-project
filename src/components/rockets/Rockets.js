import axios from 'axios'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Rockets.css'

const Rockets = () => {
  const [allRockets, setAllRockets] = useState([])

  useEffect(() => {
    const fetchAllRockets = async () => {
      const resposne = await axios.get('https://api.spacexdata.com/v3/rockets')
      setAllRockets(resposne.data)
    }
    fetchAllRockets()
  }, [])

  const demoRockets = [
    ...allRockets,
    ...allRockets,
    ...allRockets,
    ...allRockets,
  ]
  console.log(demoRockets.length)

  return (
    <section className='rockets'>
      <div className='rocket-title'>
        <h1>Rockets</h1>
      </div>

      <div className='rocket-cards'>
        {demoRockets.map((rocket) => (
          <div className='rocket-card'>
            <article>
              <div className='rocket-card-img'>
                <img src={rocket && rocket.flickr_images[0]} alt='' />
              </div>

              <div className='rocket-card-details'>
                <h1>{rocket && rocket.rocket_name}</h1>
                <span>{moment(rocket.first_flight).format('MMM YYYY')}</span>
              </div>

              <div className='rocket-description'>
                <p>
                  <p>{rocket && rocket.description}</p>
                </p>
              </div>
              <Link to={rocket && `/rocket/${rocket.rocket_id}`}>
                <button className='btn-secondary'>Read More</button>
              </Link>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Rockets
