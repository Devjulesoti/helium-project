import React from 'react'
import "../../Styles/about/section8.css";
import laptop from '../../assets/images/about/laptop1@2x.png (1).png'

const Section8 = () => {
  return (
    <div className='container section8 d-flex justify-content-around align-items-center'>
        <div className='text-md-start ps-md-5'>
            <p className='text-light'>INTRESTED IN HELIUM?</p>
            <h4 className='text-light'>Take your hospital digital in record time</h4>
            <button className=' demo  mt-2'>SCHEDULE A DEMO</button>
        </div>
        <div className='image-div'>
            <img className='w-75' src={laptop} alt="" />
        </div>

    </div>
  )
}

export default Section8