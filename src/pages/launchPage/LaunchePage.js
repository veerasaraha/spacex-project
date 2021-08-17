import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './LaunchePage.css'
import moment from 'moment'
import ImageSlider from '../../services/ImageSlider/ImageSlider'
import TableCard from '../rocketPage/TableCard'
import LaunchShip from './LaunchShip'
import LaunchSocialMediaLinks from './LaunchSocialMediaLinks'

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
      <div>
        <h1 className='launch-name'>{launchInfo && launchInfo.mission_name}</h1>

        <div className='launch-title-name'>
          {launchInfo && (
            <TableCard
              className='info-container'
              timesTimeRednder={6}
              propertyNamesList={[
                'Year of launch',
                'Launch Success',
                'Tentaive',
                'Upcoming',
                'Date',
              ]}
              propertyValueList={[
                launchInfo.launch_year,
                `${launchInfo.launch_success}`,
                `${launchInfo.is_tentative}`,
                `${launchInfo.upcoming}`,
                moment(launchInfo.launch_date_local).format(
                  'MMMM Do YYYY, h:mm:ss a'
                ),
              ]}
            />
          )}

          <div className='img-container'>
            {launchInfo.links &&
              launchInfo.links.flickr_images &&
              launchInfo.links.flickr_images.length > 0 && (
                <ImageSlider images={launchInfo.links.flickr_images} />
              )}
          </div>
        </div>
      </div>

      <div className='launch-rocket-info'>
        {launchInfo.rocket && (
          <TableCard
            heading='Launch Rocket Info'
            timesTimeRednder={2}
            link={true}
            linkTo={launchInfo.rocket.rocket_id}
            linkName={launchInfo.rocket.rocket_name}
            propertyNamesList={['Name', 'Type']}
            propertyValueList={[
              launchInfo.rocket.rocket_name,
              launchInfo.rocket.rocket_type,
            ]}
          />
        )}

        {launchInfo.rocket && (
          <TableCard
            heading='1st Stage Cores'
            timesTimeRednder={4}
            propertyNamesList={[
              'Resuesd',
              'Landing success',
              'Landing vechicle',
              'Landing type',
            ]}
            propertyValueList={[
              `${launchInfo.rocket.first_stage.cores[0].reused}`,
              `${launchInfo.rocket.first_stage.cores[0].land_success}`,
              `${launchInfo.rocket.first_stage.cores[0].landing_vehicle}`,
              `${launchInfo.rocket.first_stage.cores[0].landing_type}`,
            ]}
          />
        )}

        {launchInfo.rocket && (
          <TableCard
            heading='2nd Stage Payload'
            timesTimeRednder={4}
            propertyNamesList={[
              'Type',
              'Customers',
              'Nationality',
              'Manufacturer',
            ]}
            propertyValueList={[
              `${launchInfo.rocket.second_stage.payloads[0].payload_type}`,
              `${launchInfo.rocket.second_stage.payloads[0].customers[0]}`,
              `${launchInfo.rocket.second_stage.payloads[0].nationality}`,
              `${launchInfo.rocket.second_stage.payloads[0].manufacturer}`,
            ]}
          />
        )}
      </div>

      <div className='launch-deatils'>
        {launchInfo.launch_site && (
          <TableCard
            heading='About Launch site'
            timesTimeRednder={2}
            propertyNamesList={['Name', 'Long Name']}
            propertyValueList={[
              launchInfo.launch_site.site_name,
              launchInfo.launch_site.site_name_long,
            ]}
          />
        )}
        {launchInfo.ships && <LaunchShip ships={launchInfo.ships} />}
      </div>

      {launchInfo.links && <LaunchSocialMediaLinks links={launchInfo.links} />}
    </section>
  )
}

export default LaunchePage
