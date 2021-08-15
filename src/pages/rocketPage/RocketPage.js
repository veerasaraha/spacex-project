import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './RocketPage.css'

const RocketPage = () => {
  const [rocketInfo, setRocketInfo] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchRocketDetail = async () => {
      const response = await axios.get(
        `https://api.spacexdata.com/v3/rockets/${id}`
      )

      setRocketInfo(response.data)
    }

    fetchRocketDetail()
  }, [id])

  console.log(rocketInfo)
  return (
    <section className='rocket-page'>
      <div className='rocket-img'>
        <img
          src={rocketInfo.flickr_images && rocketInfo.flickr_images[0]}
          alt=''
        />
      </div>
      <div className='rocket-details'>
        <h1>{rocketInfo.rocket_name}</h1>
        <p>{rocketInfo.description}</p>
        <span>{rocketInfo.first_flight}</span>
      </div>

      <div className='rocket-overview'>
        <h2>Overview</h2>
        <table>
          <tr>
            <td>Height</td>
            <td>
              {rocketInfo.height && rocketInfo.height.meters}
              <span>{rocketInfo.height && rocketInfo.height.feet}</span>
            </td>
          </tr>

          <tr>
            <td>Diameter</td>
            <td>
              {rocketInfo.diameter && rocketInfo.diameter.meters}
              <span>{rocketInfo.diameter && rocketInfo.diameter.feet}</span>
            </td>
          </tr>

          <tr>
            <td>Mass</td>
            <td>
              {rocketInfo.mass && rocketInfo.mass.kg}
              <span>{rocketInfo.mass && rocketInfo.mass.lb}</span>
            </td>
          </tr>
        </table>
      </div>

      <div className='rocket-payload'>
        <h1>Rocket Payload</h1>
        {rocketInfo.payload_weights && (
          <>
            {rocketInfo.payload_weights.map((payload) => (
              <div>
                <table>
                  <tr>
                    <td>{payload.name}</td>
                    <td>
                      {payload.kg && payload.kg}
                      <span>{payload.lb && payload.lb}</span>
                    </td>
                  </tr>
                </table>
              </div>
            ))}
          </>
        )}
      </div>

      <div className='rocket-engine'>
        <h1>About Engine</h1>
        <dl>
          <dt>Type</dt>
          <dd>{rocketInfo.engines && rocketInfo.engines.type}</dd>

          <dt>Version</dt>
          <dd>{rocketInfo.engines && rocketInfo.engines.version}</dd>

          <dt>Layout</dt>
          <dd>{rocketInfo.engines && rocketInfo.engines.layout}</dd>
        </dl>

        <dl>
          <h2>Engine Propollant</h2>
          <dt>Propellant_1</dt>
          <dd>{rocketInfo.engines && rocketInfo.engines.propellant_1}</dd>

          <dt>Propellant_2</dt>
          <dd>{rocketInfo.engines && rocketInfo.engines.propellant_2}</dd>
        </dl>

        <table>
          <h1>Thrust</h1>
          <tr>
            <td>Sea_level</td>
            <td>
              {rocketInfo.engines && rocketInfo.engines.thrust_sea_level.kN}
              <span>
                {rocketInfo.mass && rocketInfo.engines.thrust_sea_level.lbf}
              </span>
            </td>
          </tr>
          <tr>
            <td>Vacum</td>
            <td>
              {rocketInfo.engines && rocketInfo.engines.thrust_vacuum.kN}
              <span>
                {rocketInfo.mass && rocketInfo.engines.thrust_vacuum.lbf}
              </span>
            </td>
          </tr>
        </table>
      </div>

      <div className='rocket-stages'>
        <table>
          <h1>First Stage</h1>
          <tr>
            <td>Reusable</td>
            <td>
              {rocketInfo.first_stage && `${rocketInfo.first_stage.reusable}`}
            </td>
          </tr>

          <tr>
            <td>Num of engines</td>
            <td>
              {rocketInfo.first_stage && `${rocketInfo.first_stage.engines}`}
            </td>
          </tr>

          <tr>
            <td>Fuel</td>
            <td>
              {rocketInfo.first_stage &&
                `${rocketInfo.first_stage.fuel_amount_tons}`}
            </td>
          </tr>

          <tr>
            <td>Sea level thrust</td>
            <td>
              {rocketInfo.first_stage &&
                rocketInfo.first_stage.thrust_sea_level.kN}
              <span>
                {rocketInfo.first_stage &&
                  rocketInfo.first_stage.thrust_sea_level.lbf}
              </span>
            </td>
          </tr>

          <tr>
            <td>Vacum level thrust</td>
            <td>
              {rocketInfo.first_stage &&
                rocketInfo.first_stage.thrust_vacuum.kN}
              <span>
                {rocketInfo.first_stage &&
                  rocketInfo.first_stage.thrust_vacuum.lbf}
              </span>
            </td>
          </tr>
        </table>

        <table>
          <h1>Second Stage</h1>
          <tr>
            <td>Reusable</td>
            <td>
              {rocketInfo.second_stage && `${rocketInfo.second_stage.reusable}`}
            </td>
          </tr>

          <tr>
            <td>Num of engines</td>
            <td>
              {rocketInfo.second_stage && `${rocketInfo.second_stage.engines}`}
            </td>
          </tr>

          <tr>
            <td>Fuel</td>
            <td>
              {rocketInfo.second_stage &&
                `${rocketInfo.second_stage.fuel_amount_tons}`}
            </td>
          </tr>

          <tr>
            <td>Thrust</td>
            <td>
              {rocketInfo.second_stage && rocketInfo.second_stage.thrust.kN}
              <span>
                {rocketInfo.second_stage && rocketInfo.second_stage.thrust.lbf}
              </span>
            </td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default RocketPage
