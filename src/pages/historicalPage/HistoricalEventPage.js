import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './HistoricalEventPage.css'

const HistoricalEventPage = () => {
  const [hisoricalEvent, setHistoricalEvent] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchHistoricalEvent = async () => {
      const response = await axios.get(
        `https://api.spacexdata.com/v3/history/${id}`
      )

      setHistoricalEvent(response.data)
    }

    fetchHistoricalEvent()
  }, [id])

  console.log(hisoricalEvent)
  return (
    <div className='historical-page'>
      <span>Historical Event Page</span>
    </div>
  )
}

export default HistoricalEventPage
