import axios from 'axios'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Rockets.css'

const Rockets = () => {
  const [allRockets, setAllRockets] = useState([])
  const [filterParam, setFilterParam] = useState('All')

  useEffect(() => {
    const fetchAllRockets = async () => {
      const resposne = await axios.get('https://api.spacexdata.com/v3/rockets')
      setAllRockets(resposne.data)
    }
    fetchAllRockets()
  }, [])

  const optionValues = allRockets.map((rocket) => ({
    rocketName: rocket.rocket_id,
  }))

  return (
    <section className='rockets'>
      <div className='rocket-title'>
        <h1>Rockets</h1>
      </div>

      <div className='filter'>
        <h4>Filter by name</h4>
        <select
          name='select rocket'
          onChange={(e) => setFilterParam(e.target.value)}>
          <option defaultChecked defaultValue='all'>
            All
          </option>
          {optionValues.map((rocket) => (
            <>
              <option value={rocket.rocketName}>
                {rocket.rocketName.toUpperCase()}
              </option>
            </>
          ))}
        </select>
      </div>

      <div className='rocket-cards'>
        {allRockets
          .filter((filterRocket) => {
            if (filterParam === 'All') {
              return filterRocket
            } else if (filterParam !== '') {
              return filterRocket.rocket_id.toLowerCase() === filterParam
            }
            return true
          })
          .map((rocket) => (
            <div className='rocket-card' key={rocket.id}>
              {console.log(rocket.id)}
              <article>
                <img src={rocket && rocket.flickr_images[0]} alt='' />

                <div className='rocket-card-top'>
                  <h1>{rocket && rocket.rocket_name}</h1>
                  <span>{moment(rocket.first_flight).format('MMM YYYY')}</span>
                </div>

                <p>
                  {rocket && rocket.description.substring(0, 100) + '...'}
                  <Link
                    className='rocket-link'
                    to={rocket && `/rocket/${rocket.rocket_id}`}>
                    Read More
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Rockets
