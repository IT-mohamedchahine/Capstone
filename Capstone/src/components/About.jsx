import React from 'react'
import chef from '../icons_assets/Mario and Adrian b.jpg';
import dessert from '../icons_assets/lemon dessert.jpg';
const About = () => {
  return (
    <div className='about'>
      <div className='aboutLeft'>
        <h3>Little Lemon</h3>
        <p>Chicago</p>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
</p>
        </div>
      </div>
      <div className='aboutRight'>
      <img src={chef} alt="Chef One"/>
        <img src={dessert} alt="Chef Two"/>
     
      </div>
    </div>
  )
}

export default About