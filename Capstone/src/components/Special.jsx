import React from 'react'


const Special = ({image,name,price}) => {
  return (
    <div className='special'>
        <img src={image} alt="Food Image"/>
        <div className='specialTagline'>
        <h3>{name}</h3>
        <p>XAF {price}</p>
        </div>
        <p className='specialDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </p>
        <div className='order'>
        <p>Order Delivery</p>
        </div>
       
    </div>
  )
}

export default Special