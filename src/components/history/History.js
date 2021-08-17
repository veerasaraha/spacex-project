import axios from 'axios'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Wiki from '../../images/icons8-wikipedia-240.png'
import Reddit from '../../images/icons8-reddit-240.png'
import ArticlePng from '../../images/icons8-news-240.png'
import './History.css'
import Scroller from '../../pages/Scroller'

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
      <div className='history-title'>
        <h1>History</h1>
      </div>
      <Scroller showTop={true} showBottom={true}>
        <section className='timeline-section'>
          <div className='timeline-items'>
            {historicalEvents.map((history) => (
              <div className='timeline-item' key={history.id}>
                <div className='timeline-dot'></div>
                <div className='timeline-date'>
                  {moment(history.event_date_utc.substring(0, 10)).format(
                    'MMM YYYY'
                  )}
                </div>
                <div className='timeline-content'>
                  <h3>{history.title}</h3>
                  <p>{history.details}</p>
                  {history.links.wikipedia && (
                    <a
                      href={history.links.wikipedia}
                      target='_blank'
                      rel='noreferrer'>
                      <img src={Wiki} alt='' />
                    </a>
                  )}

                  {history.links.reddit && (
                    <a
                      href={history.links.reddit}
                      target='_blank'
                      rel='noreferrer'>
                      <img src={Reddit} alt='' />
                    </a>
                  )}

                  {history.links.article && (
                    <a
                      href={history.links.article}
                      target='_blank'
                      rel='noreferrer'>
                      <img src={ArticlePng} alt='' />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Scroller>
    </div>
  )
}

export default History
