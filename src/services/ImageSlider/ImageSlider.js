import { useState } from 'react'
import './ImageSlider.css'

const ImageSlider = ({ images }) => {
  const length = images.length
  const [index, setIndex] = useState(0)

  return (
    <div className='image-slider'>
      <div
        className='images-inner'
        style={{ backgroundImage: `url(${images[index]})` }}>
        <div className='left'>
          <i
            className={
              index === 0 ? `fas fa-chevron-left hide` : `fas fa-chevron-left `
            }
            onClick={() => index > 0 && setIndex(index - 1)}></i>
        </div>
        <div className='center'></div>
        <div className='right'>
          <i
            className={
              index === length - 1
                ? `fas fa-chevron-right hide`
                : `fas fa-chevron-right `
            }
            onClick={() => index < length - 1 && setIndex(index + 1)}></i>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
