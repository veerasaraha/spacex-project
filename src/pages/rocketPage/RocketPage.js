import axios from 'axios'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageSlider from '../../services/ImageSlider/ImageSlider'

import './RocketPage.css'
import TableCard from './TableCard'

const RocketPage = () => {
  const [rocketInfo, setRocketInfo] = useState({})
  const { id } = useParams()

  const converToValidNumberFormat = (value) => {
    return new Intl.NumberFormat().format(value)
  }
  useEffect(() => {
    const fetchRocketDetail = async () => {
      const response = await axios.get(
        `https://api.spacexdata.com/v3/rockets/${id}`
      )

      setRocketInfo(response.data)
    }

    fetchRocketDetail()
  }, [id])

  return (
    <section className='rocket-page'>
      <div className='rocket-img'>
        {rocketInfo.flickr_images && rocketInfo.flickr_images.length > 0 && (
          <ImageSlider images={rocketInfo.flickr_images} />
        )}
      </div>
      <div className='rocket-details box'>
        <div className='rocket-details-top'>
          <h1>{rocketInfo.rocket_name}</h1>
          <span>{moment(rocketInfo.first_flight).format('MMM YYYY')}</span>
        </div>
        <p>{rocketInfo.description}</p>
      </div>

      <div className='rocket-overview '>
        {rocketInfo.height && rocketInfo.diameter && rocketInfo.mass && (
          <TableCard
            heading='Overview'
            timesTimeRednder={3}
            propertyNamesList={['Height', 'Diameter', 'Mass']}
            propertyValueList={[
              `${rocketInfo.height.meters} m / ${
                rocketInfo.height && rocketInfo.height.feet
              } ft`,
              `${rocketInfo.diameter.meters} m / ${
                rocketInfo.diameter && rocketInfo.diameter.feet
              } ft`,
              `${converToValidNumberFormat(rocketInfo.mass.kg)}
              kg / 
              ${converToValidNumberFormat(rocketInfo.mass.lb)}
              lbs`,
            ]}
          />
        )}

        {rocketInfo.engines && (
          <>
            <TableCard
              heading='Engine'
              timesTimeRednder={3}
              propertyNamesList={['Type', 'Version', 'Layout']}
              propertyValueList={[
                rocketInfo.engines.type,
                rocketInfo.engines.version,
                rocketInfo.engines.layout,
              ]}
            />
          </>
        )}

        {rocketInfo.engines && (
          <TableCard
            heading='Propollant'
            timesTimeRednder={2}
            propertyNamesList={['Propellant 1', 'Propellant 2']}
            propertyValueList={[
              rocketInfo.engines.propellant_1,
              rocketInfo.engines.propellant_1,
            ]}
          />
        )}
      </div>

      <div className='rocket-engine'>
        <div className='rocket-payload'>
          <h1>Payload</h1>
          <hr />
          {rocketInfo.payload_weights && (
            <>
              {rocketInfo.payload_weights.map((payload) => (
                <div key={payload.id}>
                  <table>
                    <tbody>
                      <tr>
                        <td>{payload.name}</td>
                        <td>
                          {payload.kg && payload.kg} kg /{' '}
                          <span>{payload.lb && payload.lb} lbs</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </>
          )}
        </div>

        {rocketInfo.engines && (
          <TableCard
            heading='Thrust'
            timesTimeRednder={2}
            propertyNamesList={['Sea Level', 'Vacum Level']}
            propertyValueList={[
              `${
                rocketInfo.first_stage.thrust_sea_level.kN
              } KN / ${converToValidNumberFormat(
                rocketInfo.first_stage.thrust_sea_level.lbf
              )} lbf`,
              `${
                rocketInfo.first_stage.thrust_vacuum.kN
              } KN / ${converToValidNumberFormat(
                rocketInfo.first_stage.thrust_vacuum.lbf
              )} lbf`,
            ]}
          />
        )}
      </div>

      <div className='rocket-stages'>
        {rocketInfo.first_stage && (
          <TableCard
            heading='1st Stage'
            timesTimeRednder={3}
            propertyNamesList={['Reusable', '# Engines', 'Fuel']}
            propertyValueList={[
              `${rocketInfo.first_stage.reusable}`,
              rocketInfo.first_stage.engines,
              `${rocketInfo.first_stage.fuel_amount_tons} Tons`,
            ]}
          />
        )}

        {rocketInfo.second_stage && (
          <TableCard
            heading='2nd Stage'
            timesTimeRednder={5}
            propertyNamesList={[
              'Reusable',
              '# Engines',
              'Fuel',
              'Burn Time',
              'Thrust',
            ]}
            propertyValueList={[
              `${rocketInfo.second_stage.reusable}`,
              rocketInfo.second_stage.engines,
              `${rocketInfo.second_stage.fuel_amount_tons} Tons`,
              `${rocketInfo.second_stage.burn_time_sec} sec`,
              `${rocketInfo.second_stage.thrust.kN} KN / ${rocketInfo.second_stage.thrust.lbf} Lbf`,
            ]}
          />
        )}
      </div>
    </section>
  )
}

export default RocketPage
