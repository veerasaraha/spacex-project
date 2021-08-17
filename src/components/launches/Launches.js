import { useEffect, useState } from 'react'
import axios from 'axios'
import _loadash from 'lodash'
import './Launches.css'
import Scroller from '../../services/Scroller/Scroller'
import LaunchCard from './LaunchCard'
import TitleCard from '../../services/TitleCard'

const Launches = () => {
  const [allLaunches, setAllLaunches] = useState([])
  const [startIndex, setStartIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [searchValue, setSearchValue] = useState('')
  const [cuurentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchAllLaunches = async () => {
      const resposne = await axios.get('https://api.spacexdata.com/v3/launches')

      setAllLaunches(resposne.data)
    }
    fetchAllLaunches()
  }, [])

  const numOfPages = allLaunches ? Math.ceil(allLaunches.length / 10) : 0
  const pages = _loadash.range(1, numOfPages + 1)

  const pagination = (pageNo) => {
    setCurrentPage(pageNo)
    const startIndex = (pageNo - 1) * 10
    setStartIndex(startIndex)
    setPageSize(pageNo * 10)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const filterQuery = (items) => {
    if (searchValue !== '') {
      return items.filter(
        (item) => item.mission_name.toLowerCase().indexOf(searchValue) > -1
      )
    }

    return items
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

        <div className='launch-cards'>
          {filterQuery(allLaunches)
            .slice(startIndex, pageSize)
            .map((launch) => (
              <LaunchCard launch={launch} key={launch.flight_number} />
            ))}
        </div>
      </Scroller>

      <>
        <div className='pagination'>
          {pages.map((page) => (
            <a
              href
              style={page === cuurentPage ? { color: '#333' } : null}
              key={page}
              onClick={() => pagination(page)}>
              {page}
            </a>
          ))}
        </div>
      </>
    </section>
  )
}

export default Launches
