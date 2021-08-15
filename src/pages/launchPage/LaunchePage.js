import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './LaunchePage.css'

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

  console.log(launchInfo)
  return (
    <section className='launch-page'>
      <div className='launch-title-name'>
        <table>
          <h1>Launch {launchInfo && launchInfo.mission_name}</h1>
          <tr>
            <td>Name</td>
            <td>{launchInfo && launchInfo.mission_name}</td>
          </tr>

          <tr>
            <td>Year of launch</td>
            <td>{launchInfo && `${launchInfo.is_tentative}`}</td>
          </tr>

          <tr>
            <td>Tentaive</td>
            <td>{launchInfo && launchInfo.launch_year}</td>
          </tr>
          <tr>
            <td>Upcoming</td>
            <td>{launchInfo && `${launchInfo.upcoming}`}</td>
          </tr>

          <tr>
            <td>Local Date</td>
            <td>{launchInfo && launchInfo.launch_date_local}</td>
          </tr>

          <tr>
            <td>UTC Date</td>
            <td>{launchInfo && launchInfo.launch_date_utc}</td>
          </tr>
        </table>
      </div>

      <div className='launch-rocket-info'>
        <table>
          <h1>Launch Rocket Info</h1>
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

        <table>
          <h1>First Stage Cores</h1>
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

        <div>
          {' '}
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

      <div>
        <h1>About Launch site</h1>
        <table>
          <tr>
            <td>Id</td>
            <td>{launchInfo.launch_site && launchInfo.launch_site.site_id}</td>
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
              {launchInfo.launch_site && launchInfo.launch_site.site_name_long}
            </td>
          </tr>
        </table>
      </div>

      <div className='launch-ships'>
        <h1>Launch Ships</h1>
        {launchInfo.ships &&
          launchInfo.ships.map((ship) => (
            <>
              <ul>
                <li>{ship}</li>
              </ul>
            </>
          ))}
      </div>

      <div className='launch-success-info'>
        <table>
          <h1>Launch Success Deatils</h1>
          <tr>
            <td>Is success</td>
            <td>{launchInfo && `${launchInfo.launch_success}`}</td>
          </tr>
        </table>
      </div>

      <div className='launch-failure-info'>
        <table>
          <h1>Launch Failure Deatils</h1>
          <tr>
            <td>Reason</td>
            <td>
              {launchInfo.launch_failure_details &&
                launchInfo.launch_failure_details.reason}
            </td>
          </tr>
        </table>
      </div>

      <div className='launch-social-links'>
        <table>
          <h1>Launch Social Links</h1>
          <tr>
            <td>Wikipedia</td>
            <td>{launchInfo.links && launchInfo.links.wikipedia}</td>
          </tr>

          <tr>
            <td>Youtube</td>
            <td>{launchInfo.links && launchInfo.links.video_link}</td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default LaunchePage
