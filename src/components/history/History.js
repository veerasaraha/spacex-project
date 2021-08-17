import { useEffect, useState } from 'react'
import axios from 'axios'
import './History.css'
import Scroller from '../../services/Scroller/Scroller'
import TitleCard from '../../services/TitleCard'
import HistoryCard from './HistoryCard'

const History = () => {
  const [historicalEvents, setHistoricalEvents] = useState([])

  useEffect(() => {
    const fetchHistoicalEvents = async () => {
      const response = await axios.get('https://api.spacexdata.com/v3/history')
      setHistoricalEvents(response.data)
    }

    fetchHistoicalEvents()
  }, [])

  return (
    <div className='history'>
      <TitleCard title='History' className='history' />
      <Scroller showTop={true} showBottom={true}>
        <section className='timeline-section'>
          <div className='timeline-items'>
            {historicalEvents.map((history) => (
              <HistoryCard history={history} key={history.id} />
            ))}
          </div>
        </section>
      </Scroller>
    </div>
  )
}

export default History
