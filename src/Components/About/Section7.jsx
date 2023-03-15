import React from 'react'
import john from '../../assets/images/about/johns.svg.png'
import insider from '../../assets/images/about/insider.svg.png'
import crunch from '../../assets/images/about/crunch.svg.png'
import inc from '../../assets/images/about/inc.svg.png'
import stear from '../../assets/images/about/stears.svg.png'
import forbes from '../../assets/images/about/forbes.svg.png'
import "../../Styles/about/section7.css";

const Section7 = () => {
  return (
    <div className="container-fluid sec7-outer">
      <div className="asection7 container">
        <h2 className=" text-center text-light py-5">In the media</h2>

        <div>
          <div class=" text-center">
            <div class="row row-cols-2 row-cols-xl-6  row-cols-lg-4 g-2 g-lg-3">
              <div class="col">
                <div class="each-one7">
                  <img src={john} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="each-right7">
                  <img src={insider} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="each-one7">
                  <img src={crunch} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="each-right7">
                  <img src={inc} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="each-one7">
                  <img src={stear} alt="" />
                </div>
              </div>
              <div class="col">
                <div class="each-right7">
                  <img src={forbes} alt="" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className=' px-5 w-75 m-auto py-5 digital text-center'>
        <p className='text-light '>"Helium Health provides vital digitized healthcare services such as electronic medical records, hospital management and insurance, billing, and analytics software for the continent's top medical providers and services."</p>
            <h5 className='text-light'>-Forbes,2018</h5>
        </div>
        <button className=' text-light d-flex justify-content-center download p-3 mt-5'>Download press kit</button>
      </div>
    </div>
  )
}

export default Section7