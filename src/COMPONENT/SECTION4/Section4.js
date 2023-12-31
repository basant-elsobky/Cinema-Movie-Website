import React from 'react'
import './section4.css'
import friends from '../images/live_img.png'
const Section4 = () => {
  return (
    <div className='section4'>
      <div className='container'>
        <div className='content'>
            <div className='row'>
                <div className='col-lg-5 col-sm-12'>
                    <div className='section-title'>
                        <span className='sub-title'>ONLINE STREAMING</span>
                        <h2 className='title'>
                        Live Movie & TV Shows For Friends & Family
                        </h2>
                    </div>
                    <div className='live-movie-content'>
                        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration</p>
                    <div className='live-fact'>
                        <div className='reolution'>
                            <h2>HD 4K</h2>
                        </div>
                        <div className='active-customer'>
                            <h4>20k +</h4>
                            <p>Active Customer</p>
                        </div>
                    </div>
                    <a className='btn'>download now</a>
                    </div>
                </div>
                <div className='col-lg-7 col-sm-12'>
                    <img src={friends}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
