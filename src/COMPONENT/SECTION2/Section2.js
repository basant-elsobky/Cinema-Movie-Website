import React, { useState } from 'react'
import './section2.css'


import Tvshowslist from './Tvshowslist'


const Section2 = () => {
    const [contant, setcontent]= useState(<Tvshowslist/>)
function documentary(){
setcontent("no tv documnetary")
    }
function tvshow(){
setcontent(<Tvshowslist/>)
    }
function toprated(){
setcontent(<Tvshowslist/>)
    }
    return (
       
       <div className='section2' id="movieSection">
            <div className='d-flex row align-items-end mb-4 '>
                <div className='col-lg-4 section2content' >
                    <div className='section-title text-center text-lg-left'>
                        <span className='sub-title'>ONLINE STREAMING</span>
                        <h2 className='title'>Upcoming Movies</h2>
                    </div>
                </div>
            </div>
            <div className='d-flex   row justify-content-center'>
                <div className='col-lg-8 mt-4'>
                    <div className='d-flex tr-movie-menu2-active text-center ' style={{maxWidth:'70px'}}>
                        <a onClick={tvshow}  to='/'>
                            <button>TV Shows</button>
                        </a>
                        <a onClick={documentary} to='movies/documentry'>
                            <button>documentry</button>
                        </a>
                        <a onClick={toprated} to='movies/top rated'>

                            <button>Top rated</button>
                        </a>
                        
                    </div>
                </div>
            </div>
          {contant}
         
        </div>
       
    )
}

export default Section2
