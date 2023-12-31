import React from 'react'
import './home.css'

import Bannercontent from './Bannercontent'
import Section2 from './SECTION2/Section2'
import Section3 from './SECTION3/Section3'
import Section4 from './SECTION4/Section4'
import Section5 from './SECTION5/Section5'
import Section6 from './SECTION6/Section6'
import Footer from './FOOTER/Footer'
const Homee = () => {
  
    
  return (
    <>
    <div className='homesection'  >
   <Bannercontent/>

    </div>
<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Section6/>
<Footer/>
    </>
  )
}

export default Homee
