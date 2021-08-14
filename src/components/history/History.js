import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './History.css'

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
        <h1>Historical Events</h1>
      </div>

      <div className='historical-events'>
        {historicalEvents.map((historyEvent) => (
          <div key={historyEvent.id} className='history-event'>
            <article>
              <div className='artical-detail'>
                <p>
                  {historyEvent &&
                    historyEvent.details.substring(0, 150) + '...'}
                </p>
              </div>

              <div>
                <ul
                  className={`article-links ${
                    historyEvent.links.length > 2 ? 'space-eve' : 'space-btw'
                  }`}>
                  <li>
                    {historyEvent.links.reddit && (
                      <i className='fab fa-reddit'></i>
                    )}
                  </li>
                  <li>
                    {historyEvent.links.article && (
                      <i className='far fa-newspaper'></i>
                    )}
                  </li>
                  <li>
                    {historyEvent.links.wikipedia && (
                      <i className='fab fa-wikipedia-w'></i>
                    )}
                  </li>
                </ul>
              </div>
              <span className='article-published'>
                {historyEvent.event_date_utc.substring(0, 10)}
              </span>
              <h3>{historyEvent.title}</h3>
            </article>

            <Link to={`/historical-event/${historyEvent.id}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History
