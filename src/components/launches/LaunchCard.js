import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

const LaunchCard = ({ launch }) => {
  return (
    <div className='launch-card' key={launch.mission_name}>
      <article>
        <div className='launch-card-top'>
          <h1>{launch.mission_name}</h1>
          <span>
            {moment(launch.launch_date_utc.substring(0, 10)).format('MMM YYYY')}
          </span>
        </div>

        <div className='launch-details'>
          <h2>{launch.details && launch.details.substring(0, 250)}</h2>
          <p>Launch From : {launch.launch_site.site_name_long}</p>
        </div>
      </article>
      <Link to={`/launch/${launch.flight_number}`} claaas='launch-btn'>
        <button className='btn-secondary launch-btn'>
          Read More
          <i className='fas fa-arrow-right'></i>
        </button>
      </Link>
    </div>
  )
}

export default LaunchCard
