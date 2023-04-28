import React from 'react'
import Testimony from './Testimony'
import image from '../icons_assets/restaurant.jpg'
const Testimonial = () => {
  return (
    <div className='testimonials'>
        <h3>Testimonials</h3>
        <div className='testimonialsContent'>
        <Testimony number={4} image={image} comment='The food was great'/>
        <Testimony number={5} image={image} comment='The food was great'/>
        <Testimony number={3} image={image} comment='The food was great'/>
        </div>
    </div>
  )
}

export default Testimonial