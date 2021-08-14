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
    <div className='launch-page'>
      <span>Launch Page</span>
    </div>
  )
}

export default LaunchePage
