import { useState } from 'react'
import LaunchCard from './LaunchCard'

const LaunchList = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [cuurentPage, setCurrentPage] = useState(1)

  const numOfPages = data ? Math.ceil(data.length / 10) : 0

  const pagination = (pageNo) => {
    setCurrentPage(pageNo)
    const startIndex = (pageNo - 1) * 10
    setStartIndex(startIndex)
    setPageSize(pageNo * 10)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <>
      <div className='launch-cards'>
        {data.slice(startIndex, pageSize).map((launch) => (
          <LaunchCard launch={launch} key={launch.flight_number} />
        ))}
      </div>

      <div className='pagination'>
        <>
          <i
            className={
              cuurentPage === 1
                ? `fas fa-chevron-circle-left hide`
                : 'fas fa-chevron-circle-left'
            }
            onClick={() => cuurentPage > 1 && pagination(cuurentPage - 1)}></i>

          <i
            className={
              cuurentPage === numOfPages
                ? `fas fa-chevron-circle-right hide`
                : 'fas fa-chevron-circle-right'
            }
            onClick={() =>
              cuurentPage < numOfPages && pagination(cuurentPage + 1)
            }></i>
        </>
      </div>
    </>
  )
}

export default LaunchList
