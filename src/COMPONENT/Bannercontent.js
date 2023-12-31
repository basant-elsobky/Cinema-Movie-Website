import React from 'react'
import './bannercontent.css'
const Bannercontent = () => {
    return (
        <div className='container ' id='banner'>
            <div className='bannercontent  col-xl-8 col-lg-8 text-uppercase'>
                <h6 className='sub-title'>Movlix</h6>
                <h2 className='title'>unlimited <span>movie</span>, tvs shows, & more .</h2>
                <div className='meta'>
                    <ul className='d-flex'>
                        <li className='quality'>
                            <span>pg 18</span>
                            <span>hd</span>
                        </li>
                        <li className='category'>
                            <a href='/#'>romance ,</a>
                            <a href='/#'>drama</a>
                        </li>
                        <li className='release-time '>
                            <span>
                            <i class="fa-regular fa-calendar-days"></i> 2022
                            </span>
                            <span>
                            <i class="fa-regular fa-clock"></i> 128 min
                            </span>
                        </li>
                    </ul>
                </div>
                
                <a className='banner-btn watchnow'>
                <i class="fa-solid fa-play"/> watch now
                </a>
            </div>
        </div>
    )
}

export default Bannercontent
