import React from 'react'
import Herosection from '../components/Herosection';
import Highlights from '../components/Highlights';
import Testimonial from '../components/Testimonial';
import About from '../components/About';
import './styles.css'
const Home = () => {
  return (
    <div className='homePage'>
         <Herosection/>
    <Highlights/>
 
    <Testimonial/>
    <About/>
    </div>
  )
}

export default Home