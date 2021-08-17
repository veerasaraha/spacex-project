import './Scroller.css'

const Scroller = ({ children, showTop, showBottom }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  const scrollToDown = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }
  return (
    <>
      {showTop && (
        <div className='scroll-btn top'>
          <button onClick={() => scrollToDown()}>
            <i className='fas fa-angle-double-down'></i>
          </button>
        </div>
      )}

      {children}
      {showBottom && (
        <div className='scroll-btn down'>
          <button onClick={() => scrollToTop()}>
            <i className='fas fa-angle-double-up'></i>
          </button>
        </div>
      )}
    </>
  )
}

export default Scroller
