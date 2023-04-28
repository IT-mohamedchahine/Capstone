import React from 'react'

const Reservation = (props) => {
    const {number,date,time,occasion,guests}= props
  return (
    <div className='reserveListContainer'>
        <div className='listSectionOne'>
            <p>{number}.</p>
        </div>
        <div className='listSectionTwo'>
            <p>{date}</p>
            <p>Date</p>
        </div>
        <div className='listSectionTwo'>
            <p>{time}</p>
            <p>Time</p>
        </div>
        <div className='listSectionTwo'>
            {occasion ? (  <p>{occasion}</p>):(<p>Birthday</p>)}
            <p>Occasion</p>
        </div>
        <div className='listSectionTwo'>
            <p>{guests}</p>
            <p>Guests</p>
        </div>
    </div>
  )
}

export default Reservation