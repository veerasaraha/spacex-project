import axios from 'axios'
import moment from 'moment'
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
    <section className='history'>
      <div className='history-title'>
        <h1>Historical Events</h1>
      </div>

      <div className='historical-events'>
        {historicalEvents.map((historyEvent) => (
          <div key={historyEvent.id} className='history-event'>
            {console.log(historyEvent.event_date_utc.substring(0, 10))}
            <article>
              <div className='artical-top'>
                <span className='tag'>Article</span>
                <span>
                  {moment(historyEvent.event_date_utc.substring(0, 10)).format(
                    'MMM YYYY'
                  )}
                </span>
              </div>

              <div className='article-desc'>
                <h1>{historyEvent.title}</h1>
                <p>{historyEvent.details.substring(0, 120) + '...'}</p>
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
            </article>

            <Link to={`/historical-event/${historyEvent.id}`}>
              <button className='btn-secondary'>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default History
