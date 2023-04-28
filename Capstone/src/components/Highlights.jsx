import React from 'react'
import Special from './Special'
import ItemOne from '../icons_assets/restauranfood.jpg'

const Highlights = () => {
  return (
    <div className='highlights'>
        <div className='highlightsHeader'>
            <h3>This Week Specials!</h3>
            <button aria-label='on Clik'>Online Menu</button>
        </div>
        <div className='highlightsContent'>
        <Special image={ItemOne} name="Greek Salad" price="2000"/>
        <Special image={ItemOne} name="Greek Salad" price="2000"/>
        <Special image={ItemOne} name="Greek Salad" price="2000"/>
        </div>
        
    </div>
  )
}

export default Highlights