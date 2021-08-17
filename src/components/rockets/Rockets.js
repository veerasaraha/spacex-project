import axios from 'axios'
import { useEffect, useState } from 'react'
import TitleCard from '../../services/TitleCard'
import RocketCard from './RocketCard'
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

  const filterQuery = (items, queryParam) => {
    if (queryParam === 'All') {
      return items
    } else if (queryParam !== '') {
      return items.filter((item) => item.rocket_id.toLowerCase() === queryParam)
    }
  }

  return (
    <section className='rockets'>
      <TitleCard title='Rockets' className='rocket' />

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
        {filterQuery(allRockets, filterParam).map((rocket) => (
          <RocketCard rocket={rocket} />
        ))}
      </div>
    </section>
  )
}

export default Rockets
