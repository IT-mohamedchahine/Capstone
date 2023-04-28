import React from 'react'

const Testimony = ({number,image,comment}) => {
  // const [ rate,setRate]= useState([])
  return (
    <div className='testimony'>
        <p>Jennifer</p>
        <div className='comment'>
            <img src={image} alt='user profile'/>
            <p>{comment} </p>
        </div>
        <div className='rating'>
        {
         Array(number).fill(4).map((star,index)=>(
            <p key={index}>⭐</p>
          ))
        }
        </div>
     
       
    </div>
  )
}

export default Testimony