import moment from 'moment'
import { Link } from 'react-router-dom'

const RocketCard = ({ rocket }) => {
  return (
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
  )
}

export default RocketCard
