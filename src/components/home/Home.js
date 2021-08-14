import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-wrapper'>
        <div className='home-top'>
          <div className='home-logo'>Logo</div>
          <div className='home-nav-link'>
            <ul className='home-nav-link-items'>
              <li>
                <Link to='/history'>History</Link>
              </li>
              <li>
                <Link to='/launches'>Launches</Link>
              </li>
              <li>
                <Link to='/rockets'>Rockets</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='home-bottom'>Something</div>
      </div>
    </div>
  )
}

export default Home
