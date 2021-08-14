import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SpacexSvg from '../../spacex.svg'

import './Home.css'

const Home = () => {
  const [companyInfo, setCompanyInfo] = useState({})

  const { name, founder, founded, summary } = companyInfo

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      const response = await axios.get('https://api.spacexdata.com/v3/info')

      setCompanyInfo(response.data)
    }

    fetchCompanyInfo()
  }, [])

  console.log(companyInfo)
  return (
    <div className='home-wrapper'>
      <div className='home-top'>
        <div className='home-logo'>
          <img src={SpacexSvg} title='spaceX' alt='spacX-logo' />
        </div>

        <div className='home-nav-bar'>
          <ul className='home-nav-bar-links'>
            <li className='home-nav-bar-item'>
              <Link to='/history'>History</Link>
            </li>
            <li className='home-nav-bar-item'>
              <Link to='/launches'>Launches</Link>
            </li>
            <li className='home-nav-bar-item'>
              <Link to='/rockets'>Rockets</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='home-bottom'>
        <section className='home-section-company-info'>
          <div className='company-info-box-one'>
            <div className='company-founded-name'>{name}</div>
          </div>
          <div className='company-info-box-two'>
            <div className='company-founded-text'>{founded}</div>
            <hr className='line' />
            <div className='company-founded-desc'>{summary}</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
