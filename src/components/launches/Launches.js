import { useEffect, useState } from 'react'
import axios from 'axios'
import _loadash from 'lodash'
import './Launches.css'
import { Link } from 'react-router-dom'

const Launches = () => {
  const [allLaunches, setAllLaunches] = useState([])
  const [startIndex, setStartIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
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
  }

  return (
    <div className='launch'>
      <div className='launch-title'>
        <h1>SpaceX Launches</h1>
      </div>

      <div className='launch-cards'>
        {allLaunches.slice(startIndex, pageSize).map((launch) => (
          <div className='launch-card' key={launch.mission_name}>
            <article>
              <div className='launch-card-top'>
                <h2>{launch.mission_name}</h2>
                <span>{launch.launch_date_utc.substring(0, 10)}</span>
              </div>
              <div className='launch-details'>
                <h2>{launch.details && launch.details.substring(0, 250)}</h2>
                <p>{launch.launch_site.site_name_long}</p>
              </div>
            </article>
            <Link to={`/launch/${launch.flight_number}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>

      <>
        <ul className='pagination'>
          {pages.map((page) => (
            <li
              key={page}
              style={
                page === cuurentPage ? { color: 'green' } : { color: 'red' }
              }
              onClick={() => pagination(page)}>
              <span>{page}</span>
            </li>
          ))}
        </ul>
      </>
    </div>
  )
}

export default Launches
