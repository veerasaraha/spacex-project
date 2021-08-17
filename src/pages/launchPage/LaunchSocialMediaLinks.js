import Wiki from '../../images/icons8-wikipedia-240.png'
import Reddit from '../../images/icons8-reddit-240.png'
import ArticlePng from '../../images/icons8-news-240.png'
import youtube from '../../images/icons8-youtube-play-button-240.png'

const LaunchSocialMediaLinks = ({ links }) => {
  return (
    <div className='launch-social-links'>
      <h1>Social Media</h1>
      <hr />
      <ul>
        <li>
          <a href={links && links.wikipedia} target='_blank' rel='noreferrer'>
            <img src={Wiki} alt='' />
          </a>
        </li>

        <li>
          <a
            href={links && links.reddit_launch}
            target='_blank'
            rel='noreferrer'>
            <img src={Reddit} alt='' />
          </a>
        </li>

        <li>
          <a
            href={links && links.article_link}
            target='_blank'
            rel='noreferrer'>
            <img src={ArticlePng} alt='' />
          </a>
        </li>

        <li>
          <a href={links && links.video_link} target='_blank' rel='noreferrer'>
            <img src={youtube} alt='' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default LaunchSocialMediaLinks
