import React from 'react'
import card1 from '../../assets/images/solution/card1.png'
import card2 from '../../assets/images/solution/card2.png'
import card3 from '../../assets/images/solution/card3.png'

import '../../Styles/solution/Solution.css'

const Section4 = () => {
  return (
    <div className='sosection4'>
        <h2 className='pt-5  px-5 learn'>Learn More About Our
          other Solutions
        </h2>

        <div className=' container d-md-flex gap-2 justify-content-center align-items-center'>

        <div className='px-5 py-3'>
          <div className='seach px-3 mb-3 bg-light pb-4 text-center'>
            <img src={card1} alt="" />
            <h2 className='py-3'>FOR PROVIDERS</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste, incidunt nulla pariatur, corporis iusto omnis repellat laborum quis vitae architecto, odit at optio ducimus reprehenderit libero. Sequi, aspernatur ipsa.</p>            <a href="#" className='mb-3'>Learn More</a>

          </div>
        </div> 
        
         <div className='px-5 py-3' >
          <div className='seach bg-light mb-3 pb-4 px-3 text-center'>
            <img src={card2} alt="" />
            <h2 className='py-3'>FOR PAYERS</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste, incidunt nulla pariatur, corporis iusto omnis repellat laborum quis vitae architecto, odit at optio ducimus reprehenderit libero. Sequi, aspernatur ipsa.</p>            <a href="#" className='mb-3'>Learn More</a>

          </div>
        </div>

        <div className=' px-5 py-3'>
          <div className=' seach bg-light mb-3 pb-4 px-4 text-center'>
            <img src={card3} alt="" />
            <h2 className='py-3'>FOR PARTNERS</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste, incidunt nulla pariatur, corporis iusto omnis repellat laborum quis vitae architecto, odit at optio ducimus reprehenderit libero. Sequi, aspernatur ipsa.</p>            <a href="#" className='mb-3'>Learn More</a>

          </div>
        </div> 

        </div>

    </div>
  )
}

export default Section4