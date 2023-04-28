import React from 'react';
import restaurant from "../icons_assets/restaurant.jpg"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerContent'>
      <img src={restaurant} alt="logo"/>
    <div className='footerItems'>
     
        <ul>
        <h3>Doormat Navigation</h3>
        <li><a>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#menu'>Menu</a></li>
        <li><a href='#reservations'>Reservations</a></li>
        <li><a href='#order'>Order Online</a></li>
        <li><a href='#login'>Login</a></li>
        </ul>
    </div>
    <div className='footerItems'>
     
     <ul>
     <h3>Contact</h3>
     <li>Address</li>
     <li>Phone Number</li>
     <li>Email</li>
     </ul>
 </div>
 <div className='footerItems'>
     
     <ul>
     <h3>Social Media Links</h3>
     <li>Address</li>
     <li>Phone Number</li>
     <li>Email</li>
     </ul>
 </div>
      </div>
   
    </footer>
  )
}

export default Footer