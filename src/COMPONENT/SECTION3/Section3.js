import React from 'react'
import './section3.css'
import image from '../images/services_img.jpg'
const Section3 = () => {
    return (
        <div className='section3'>
            <div className='container'>
                <div className='contant'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12 d-flex'>
                            <div className='services-iamge-wrap'><img src={image}/>
                            <a className='download-btn'>Download</a></div>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <div className='section-title'>
                                <span className='sub-title'>Our services</span>
                                <h2 className='title text-uppercase'>download your
                                    shows watch offline
                                </h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consecetur adipiscing elseddo
                                eiusmod tempor.There are
                                many variations of passages
                                of lorem Ipsum available, but the majority
                                have suffered alteration in some injected humour .
                            </p>
                            <div className='service-list'>
                                <ul>
                                    <li className='d-flex'>
                                        <div className='icon'>
                                        <i class="fa-solid fa-tv"></i>
                                        </div>
                                        <div className='content text-capitalize'>
                                            <h5>enjoy on your tv.</h5>
                                            <p>Lorem ipsum dolor sit amet, consecetur adipiscing 
                                            elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </li>
                                    <li className='d-flex '>
                                        <div className='icon '>
                                        <i class="fa-solid fa-video"></i>                                        </div>
                                        <div className='content text-capitalize'>
                                            <h5>Watch Everywhere.</h5>
                                        
                                        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
