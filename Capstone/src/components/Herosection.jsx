import React from 'react';
import { useNavigate } from 'react-router-dom';
import SaladImage from "../icons_assets/greek salad.jpg"

const Herosection = () => {
  const navigate = useNavigate()
  return (
    <div className='heroSection'>
        <div className='heroContainer'>
        <div className='heroLeft'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
            <button onClick={()=>navigate("/reservations")} aria-label='on Click'>Reserve Table</button>
        </div>
        <div className='heroRight'>
            <img src={SaladImage} alt="salad"/>
        </div>
        </div>
     
    </div>
  )
}

export default Herosection