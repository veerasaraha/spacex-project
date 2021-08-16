import axios from 'axios'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageSlider from '../ImageSlider'

import './RocketPage.css'

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
        <div>
          <h1>Overview</h1>
          <table>
            <tbody>
              <tr>
                <td>Height</td>
                <td>
                  {rocketInfo.height && rocketInfo.height.meters} m / {''}
                  {rocketInfo.height && rocketInfo.height.feet} ft
                </td>
              </tr>

              <tr>
                <td>Diameter</td>
                <td>
                  {rocketInfo.diameter && rocketInfo.diameter.meters} m / {''}
                  <span>
                    {rocketInfo.diameter && rocketInfo.diameter.feet} ft
                  </span>
                </td>
              </tr>

              <tr>
                <td>Mass</td>
                <td>
                  {rocketInfo.mass &&
                    converToValidNumberFormat(rocketInfo.mass.kg)}{' '}
                  kg / {''}
                  <span>
                    {rocketInfo.mass &&
                      converToValidNumberFormat(rocketInfo.mass.lb)}{' '}
                    lbs
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h1>Engine</h1>
          <table>
            <tbody>
              <tr>
                <td>Type</td>
                <td>{rocketInfo.engines && rocketInfo.engines.type}</td>
              </tr>

              <tr>
                <td>Version</td>
                <td>{rocketInfo.engines && rocketInfo.engines.version}</td>
              </tr>

              <tr>
                <td>Version</td>
                <td>{rocketInfo.engines && rocketInfo.engines.layout}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h1>Propollant</h1>
          <table>
            <tbody>
              <tr>
                <td>Propellant 1</td>
                <td>{rocketInfo.engines && rocketInfo.engines.propellant_1}</td>
              </tr>

              <tr>
                <td>Propellant 2</td>
                <td>{rocketInfo.engines && rocketInfo.engines.propellant_2}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='rocket-engine'>
        <div className='rocket-payload'>
          <h1>Payload</h1>
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

        <div>
          <h1>Thrust</h1>
          <table>
            <tbody>
              <tr>
                <td>Sea Level</td>
                <td>
                  {rocketInfo.engines && rocketInfo.engines.thrust_sea_level.kN}{' '}
                  kN /{' '}
                  <span>
                    {rocketInfo.mass &&
                      converToValidNumberFormat(
                        rocketInfo.engines.thrust_sea_level.lbf
                      )}{' '}
                    lbf
                  </span>
                </td>
              </tr>
              <tr>
                <td>Vacum</td>
                <td>
                  {rocketInfo.engines && rocketInfo.engines.thrust_vacuum.kN} kN
                  /{' '}
                  <span>
                    {rocketInfo.mass &&
                      converToValidNumberFormat(
                        rocketInfo.engines.thrust_vacuum.lbf
                      )}{' '}
                    lbf
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='rocket-stages'>
        <div>
          <h1>1st Stage</h1>
          <table>
            <tbody>
              <tr>
                <td>Reusable</td>
                <td>
                  {rocketInfo.first_stage &&
                    `${rocketInfo.first_stage.reusable}`}
                </td>
              </tr>

              <tr>
                <td># Engines</td>
                <td>
                  {rocketInfo.first_stage &&
                    `${rocketInfo.first_stage.engines}`}
                </td>
              </tr>

              <tr>
                <td>Fuel</td>
                <td>
                  {rocketInfo.first_stage &&
                    `${rocketInfo.first_stage.fuel_amount_tons}`}{' '}
                  Tons
                </td>
              </tr>

              <tr>
                <td>Sea level thrust</td>
                <td>
                  {rocketInfo.first_stage &&
                    rocketInfo.first_stage.thrust_sea_level.kN}{' '}
                  kN / {''}
                  <span>
                    {rocketInfo.first_stage &&
                      converToValidNumberFormat(
                        rocketInfo.first_stage.thrust_sea_level.lbf
                      )}{' '}
                    lbf
                  </span>
                </td>
              </tr>

              <tr>
                <td>Vacum level thrust</td>
                <td>
                  {rocketInfo.first_stage &&
                    rocketInfo.first_stage.thrust_vacuum.kN}{' '}
                  kN /{' '}
                  <span>
                    {rocketInfo.first_stage &&
                      converToValidNumberFormat(
                        rocketInfo.first_stage.thrust_vacuum.lbf
                      )}{' '}
                    lbf
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h1>2nd Stage</h1>
          <table>
            <tbody>
              <tr>
                <td>Reusable</td>
                <td>
                  {rocketInfo.second_stage &&
                    `${rocketInfo.second_stage.reusable}`}
                </td>
              </tr>

              <tr>
                <td>Num of engines</td>
                <td>
                  {rocketInfo.second_stage &&
                    `${rocketInfo.second_stage.engines}`}
                </td>
              </tr>

              <tr>
                <td>Fuel</td>
                <td>
                  {rocketInfo.second_stage &&
                    `${rocketInfo.second_stage.fuel_amount_tons}`}{' '}
                  Tons
                </td>
              </tr>

              <tr>
                <td>Burn Time</td>
                <td>
                  {rocketInfo.second_stage &&
                    `${rocketInfo.second_stage.burn_time_sec} sec`}
                </td>
              </tr>

              <tr>
                <td>Thrust</td>
                <td>
                  {rocketInfo.second_stage && rocketInfo.second_stage.thrust.kN}{' '}
                  kN /{' '}
                  <span>
                    {rocketInfo.second_stage &&
                      rocketInfo.second_stage.thrust.lbf}{' '}
                    lbf
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default RocketPage
