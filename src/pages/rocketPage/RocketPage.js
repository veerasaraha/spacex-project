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
    <div className='rocket-page'>
      <span>Rocket Page</span>
    </div>
  )
}

export default RocketPage
