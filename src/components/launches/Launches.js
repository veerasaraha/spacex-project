import { useEffect, useState } from 'react'
import axios from 'axios'
import './Launches.css'
import Scroller from '../../services/Scroller/Scroller'
import TitleCard from '../../services/TitleCard'
import LaunchList from './LaunchList'

const Launches = () => {
  const [allLaunches, setAllLaunches] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const fetchAllLaunches = async () => {
      const resposne = await axios.get('https://api.spacexdata.com/v3/launches')

      setAllLaunches(resposne.data)
    }
    fetchAllLaunches()
  }, [])

  const filterQuery = (items) => {
    return items.filter(
      (item) => item.mission_name.toLowerCase().indexOf(searchValue) > -1
    )
  }

  return (
    <section className='launch'>
      <TitleCard title='Launches' className='launch' />

      <Scroller showTop={true}>
        <div className='launch-search'>
          <i className='fas fa-search' aria-hidden='true'></i>
          <input
            type='text'
            placeholder='Search by name'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {allLaunches && <LaunchList data={filterQuery(allLaunches)} />}
      </Scroller>
    </section>
  )
}

export default Launches
