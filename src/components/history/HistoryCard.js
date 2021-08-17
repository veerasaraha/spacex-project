import moment from 'moment'
import Wiki from '../../images/icons8-wikipedia-240.png'
import Reddit from '../../images/icons8-reddit-240.png'
import ArticlePng from '../../images/icons8-news-240.png'
import './History.css'

const HistoryCard = ({ history }) => {
  return (
    <div className='timeline-item' key={history.id}>
      <div className='timeline-dot'></div>
      <div className='timeline-date'>
        {moment(history.event_date_utc.substring(0, 10)).format('MMM YYYY')}
      </div>
      <div className='timeline-content'>
        <h3>{history.title}</h3>
        <p>{history.details}</p>
        {history.links.wikipedia && (
          <a href={history.links.wikipedia} target='_blank' rel='noreferrer'>
            <img src={Wiki} alt='' />
          </a>
        )}

        {history.links.reddit && (
          <a href={history.links.reddit} target='_blank' rel='noreferrer'>
            <img src={Reddit} alt='' />
          </a>
        )}

        {history.links.article && (
          <a href={history.links.article} target='_blank' rel='noreferrer'>
            <img src={ArticlePng} alt='' />
          </a>
        )}
      </div>
    </div>
  )
}

export default HistoryCard
