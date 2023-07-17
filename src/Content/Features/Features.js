import React from 'react'
const Features = () => {
  return (
    <>
      <div className='Featurescontainer'><p> Animation</p>
        <div className='featureinner'>

          <div className='img'>
            <img src={require("../../images/web.jpg")} />
          </div>
          <div className='imgslid'>
          </div>
        </div>
        <p className='hover'>Hover-Effert</p>
        <div className='hover1'>
          <div className='hoverinner1'>
          </div>
          <div className='hoverinner2'>
          </div>
          <div className='hoverinner3'>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features