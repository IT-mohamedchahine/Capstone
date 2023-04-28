import React from 'react'
import Reservation from '../components/Reservation'

const ResersationList = () => {
    let lists = localStorage.getItem('reservationList');
    lists = JSON.parse(lists);
    console.log(lists)
  return (
    <div className='listContainer'>
        <h3>Your Reservations</h3>
        <div>
            {
                lists.map((item,index)=>(
                    <Reservation
                        key={item.id}
                        number={index+1}
                        date={item.date}
                        time={item.time}
                        occasion={item.occasion}
                        guests={item.guests}
                    />
                ))
            }
        </div>
        {/* <Reservation/> */}
    </div>
  )
}

export default ResersationList