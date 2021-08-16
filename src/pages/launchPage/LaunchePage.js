import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Wiki from '../../images/icons8-wikipedia-240.png'
import Reddit from '../../images/icons8-reddit-240.png'
import ArticlePng from '../../images/icons8-news-240.png'
import youtube from '../../images/icons8-youtube-play-button-240.png'
import './LaunchePage.css'
import moment from 'moment'

const LaunchePage = () => {
  const [launchInfo, setLaunchInfo] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchLaunchDetail = async () => {
      const response = await axios.get(
        `https://api.spacexdata.com/v3/launches/${id}`
      )

      setLaunchInfo(response.data)
    }

    fetchLaunchDetail()
  }, [id])

  return (
    <section className='launch-page'>
      <div className='launch-title-name'>
        <h1>{launchInfo && launchInfo.mission_name}</h1>

        <table>
          <tr>
            <td>Name</td>
            <td>{launchInfo && launchInfo.mission_name}</td>
          </tr>
          {/* <hr className='line' /> */}
          <tr>
            <td>Year of launch</td>
            <td>{launchInfo && `${launchInfo.launch_year}`}</td>
          </tr>

          <tr>
            <td>Launch Success</td>
            <td>{launchInfo && `${launchInfo.launch_success}`}</td>
          </tr>

          {launchInfo.launch_success === false && (
            <tr>
              <td>Failure Reason</td>
              <td>
                {launchInfo && `${launchInfo.launch_failure_details.reason}`}
              </td>
            </tr>
          )}

          <tr>
            <td>Tentaive</td>
            <td>{launchInfo && `${launchInfo.is_tentative}`}</td>
          </tr>
          <tr>
            <td>Upcoming</td>
            <td>{launchInfo && `${launchInfo.upcoming}`}</td>
          </tr>

          <tr>
            <td>Date</td>
            <td>
              {launchInfo &&
                moment(launchInfo.launch_date_local).format(
                  'MMMM Do YYYY, h:mm:ss a'
                )}
            </td>
          </tr>
        </table>
      </div>

      <div className='launch-rocket-info'>
        <div>
          <h1>Launch Rocket Info</h1>
          <table>
            <tr>
              <td>Name</td>
              <td>{launchInfo.rocket && launchInfo.rocket.rocket_name}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{launchInfo.rocket && launchInfo.rocket.rocket_type}</td>
            </tr>
            <tr>
              <td>Id</td>
              <td>{launchInfo.rocket && launchInfo.rocket.rocket_id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{launchInfo.rocket && launchInfo.rocket.rocket_name}</td>
            </tr>
          </table>
        </div>

        <div>
          <h1>First Stage Cores</h1>
          <table>
            <tr>
              <td>Resuesd</td>
              <td>
                {launchInfo.rocket &&
                  `${launchInfo.rocket.first_stage.cores[0].reused}`}
              </td>
            </tr>

            <tr>
              <td>Landing success</td>
              <td>
                {launchInfo.rocket &&
                  `${launchInfo.rocket.first_stage.cores[0].land_success}`}
              </td>
            </tr>

            <tr>
              <td>Landing vechicle</td>
              <td>
                {launchInfo.rocket &&
                  `${launchInfo.rocket.first_stage.cores[0].landing_vehicle}`}
              </td>
            </tr>

            <tr>
              <td>Landing type</td>
              <td>
                {launchInfo.rocket &&
                  `${launchInfo.rocket.first_stage.cores[0].landing_type}`}
              </td>
            </tr>
          </table>
        </div>

        <div>
          <h1>Second Stage Payload</h1>
          <table>
            <tr>
              <td>Id</td>
              <td>
                {launchInfo.rocket &&
                  `${launchInfo.rocket.second_stage.payloads[0].payload_id}`}
              </td>
            </tr>

            <tr>
              <td>Customers</td>
              <td>
                {launchInfo.rocket &&
                  `${
                    launchInfo.rocket.second_stage.payloads[0].customers[0] ||
                    null
                  }`}
              </td>
            </tr>

            <tr>
              <td>Nationality</td>
              <td>
                {launchInfo.rocket &&
                  `${launchInfo.rocket.second_stage.payloads[0].nationality}`}
              </td>
            </tr>

            <tr>
              <td>Manufacturer</td>
              <td>
                {launchInfo.rocket &&
                  `${launchInfo.rocket.second_stage.payloads[0].manufacturer}`}
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className='launch-deatils'>
        <div>
          <h1>About Launch site</h1>
          <table>
            <tr>
              <td>Id</td>
              <td>
                {launchInfo.launch_site && launchInfo.launch_site.site_id}
              </td>
            </tr>

            <tr>
              <td>Name</td>
              <td>
                {launchInfo.launch_site && launchInfo.launch_site.site_name}
              </td>
            </tr>

            <tr>
              <td>Long Name</td>
              <td>
                {launchInfo.launch_site &&
                  launchInfo.launch_site.site_name_long}
              </td>
            </tr>
          </table>
        </div>

        <div className='launch-ships'>
          <h1>Launch Ships</h1>
          {launchInfo.ships && launchInfo.ships.length === 0 ? (
            <table>
              <tr>
                <td>No ships provided!</td>
              </tr>
            </table>
          ) : (
            launchInfo.ships &&
            launchInfo.ships.map((ship) => (
              <table>
                <tr>
                  <td>{ship}</td>
                </tr>
              </table>
            ))
          )}
        </div>
      </div>

      <div className='launch-social-links'>
        <h1>Social Media</h1>
        <ul>
          <li>
            <a
              href={launchInfo.links && launchInfo.links.wikipedia}
              target='_blank'
              rel='noreferrer'>
              <img src={Wiki} alt='' />
            </a>
          </li>

          <li>
            <a
              href={launchInfo.links && launchInfo.links.reddit_launch}
              target='_blank'
              rel='noreferrer'>
              <img src={Reddit} alt='' />
            </a>
          </li>

          <li>
            <a
              href={launchInfo.links && launchInfo.links.article_link}
              target='_blank'
              rel='noreferrer'>
              <img src={ArticlePng} alt='' />
            </a>
          </li>

          <li>
            <a
              href={launchInfo.links && launchInfo.links.video_link}
              target='_blank'
              rel='noreferrer'>
              <img src={youtube} alt='' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default LaunchePage
