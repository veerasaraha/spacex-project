import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SpacexSvg from '../../images/PngItem_6781246.png'

import './Home.css'

const Home = () => {
  const [companyInfo, setCompanyInfo] = useState({})

  const { summary } = companyInfo

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      const response = await axios.get('https://api.spacexdata.com/v3/info')

      setCompanyInfo(response.data)
    }

    fetchCompanyInfo()
  }, [])

  return (
    <>
      <section className='header'>
        <nav>
          <div className='image-conatiner'>
            <Link to='/' className='logo'>
              <img src={SpacexSvg} alt='SpaceX' title='SpaceX' />
            </Link>
          </div>

          <div className='nav-links'>
            <i className='fas fa-times'></i>
            <ul>
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
          <i className='fas fa-bars'></i>
        </nav>

        <div className='context-text'>
          <h1>world's most high-profile commercial spaceflight company</h1>
          <p>{summary}</p>
          <Link to='/'>
            <button className='btn-primary'>Know More</button>
          </Link>
        </div>
      </section>

      <section className='features'>
        <h1>About us</h1>
        <p>
          Space Exploration Technologies is a space-transportation startup
          company founded by Elon Musk. SpaceX designs, manufactures, and
          launches advanced rockets and spacecraft.
          <br /> SpaceX develops crew and cargo capsules, engines, cryogenic
          tank structures, avionics, equipment, guidance, and control software.
          The company is developing the partially reusablelaunch vehicles Falcon
          1 and Falcon 9.
        </p>

        <div className='feature-row'>
          <div className='feature-col'>
            <h3>Founding</h3>
            <p>
              SpaceX was founded in 2002 by Elon Musk with the goal of reducing
              space transportation costs to enable the colonization of Mars.
            </p>
          </div>

          <div className='feature-col'>
            <h3>Headquarters</h3>
            <p>
              SpaceX is headquartered in Hawthorne, California, which also
              serves as its primary manufacturing plant.
            </p>
          </div>

          <div className='feature-col'>
            <h3>Our Vision</h3>
            <p>
              To revolutionize space transportation, with the ultimate goal of
              making life multiplanetary.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
