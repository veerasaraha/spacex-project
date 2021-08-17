import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SpacexSvg from '../../images/PngItem_6781246.png'
import { AboutUs, NavItems } from '../../../src/services/aboutUsData'
import Twitter from '../../images/icons8-twitter-96.png'
import Website from '../../images/icons8-website-96.png'
import './Home.css'

const Home = () => {
  const [companyInfo, setCompanyInfo] = useState({})
  const feature = useRef()

  const { summary, links } = companyInfo

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      const response = await axios.get('https://api.spacexdata.com/v3/info')

      setCompanyInfo(response.data)
    }

    fetchCompanyInfo()
  }, [])

  const executeScroll = () => {}

  return (
    <>
      <section className='header'>
        <nav>
          <div className='image-conatiner'>
            <Link to='/' className='logo'>
              <img
                src={SpacexSvg}
                alt='SpaceX'
                width=''
                height=''
                title='SpaceX'
              />
            </Link>
          </div>

          <div className='nav-links'>
            <ul>
              {NavItems.map((item) => (
                <li key={item.id}>
                  <Link to={`/${item.name.toLowerCase()}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className='context-text' ref={feature}>
          <h1>world's most high-profile commercial spaceflight company</h1>
          <p>{summary}</p>
        </div>
      </section>

      <section className='features'>
        <h1>What we do</h1>
        <p>
          Space Exploration Technologies is a space-transportation startup
          company founded by Elon Musk. SpaceX designs, manufactures, and
          launches advanced rockets and spacecraft.
          <br /> SpaceX develops crew and cargo capsules, engines, cryogenic
          tank structures, avionics, equipment, guidance, and control software.
          The company is developing the partially reusablelaunch vehicles Falcon
          1 and Falcon 9.
        </p>

        <div className='feature-row' id='feature-row'>
          {AboutUs.map((data) => (
            <div className='feature-col' key={data.id}>
              <h3>{data.heading}</h3>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='home-social-links'>
        <ul>
          {links && (
            <li>
              <a href={links.website} target='_blank' rel='noreferrer'>
                <img src={Website} alt='' />
              </a>
            </li>
          )}

          {links && (
            <li>
              <a href={links.twitter} target='_blank' rel='noreferrer'>
                <img src={Twitter} alt='' />
              </a>
            </li>
          )}
        </ul>
      </section>
    </>
  )
}

export default Home
