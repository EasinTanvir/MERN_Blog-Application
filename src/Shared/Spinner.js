import React from 'react'

const Spinner = () => {
  return (
    <React.Fragment>
        <div className='spinners'>
  <div className="spinner-grow text-primary" role="status">
    <span  className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-success" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-danger" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-warning" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-info" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-light" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="grow text-dark" role="status">
    <span style={{color:'blue',fontSize:'18px',fontWeight:'bolder'}}>Please wait...</span>
  </div>
</div>

    </React.Fragment>
  )
}

export default Spinner