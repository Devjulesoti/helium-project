import React from 'react'
import card1 from '../../assets/images/solution/card1.png'
import card2 from '../../assets/images/solution/card2.png'
import card3 from '../../assets/images/solution/card3.png'

import '../../Styles/solution/Solution.css'

const Section4 = () => {
  return (
    <div className='sosection4'>
        <h2 className='pt-5 justify-content-center align-item-center px-5'>Learn More About Our
          other Solutions
        </h2>

        <div className=' container p-3 d-md-flex gap-2 justify-content-center align-items-center'>

        <div className='px-5 py-3'>
          <div className='each px-3 mb-3 bg-light pb-4'>
            <img src={card1} alt="" />
            <h2 className='py-3'>FOR PROVIERS</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dolore autem accusantium incidunt blanditiis sit porro ipsum sequi ex ipsa voluptate, odit quidem consequuntur nisi mollitia adipisci dolorem a. Culpa.</p>
            <a href="#" className='mb-3'>Learn More</a>

          </div>
        </div> 
        
         <div className='px-5 py-3' >
          <div className='each bg-light mb-3 pb-4 px-3'>
            <img src={card2} alt="" />
            <h2 className='py-3'>FOR PAYERS</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque mollitia quisquam provident recusandae laboriosam in, quo distinctio omnis totam harum libero maxime accusantium! Eligendi, suscipit hic et voluptatibus odit modi!</p>
            <a href="#" className='mb-3'>Learn More</a>

          </div>
        </div>

        <div className=' px-4 py-3'>
          <div className=' each bg-light mb-3 pb-4 px-4'>
            <img src={card3} alt="" />
            <h2 className='py-3'>FOR PATNERS</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore minus magni ex. Molestias temporibus dicta ipsa qui illo, ullam perspiciatis est sint cum! Aperiam culpa vitae esse sit in debitis!</p>
            <a href="#" className='mb-3'>Learn More</a>

          </div>
        </div> 

        </div>

    </div>
  )
}

export default Section4