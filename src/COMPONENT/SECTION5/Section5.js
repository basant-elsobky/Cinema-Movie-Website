import React from 'react'
import './section5.css'
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import Card from '../SECTION2/Card'
const Section5 = () => {
    return (
        <div className='section5'>
            <div className='container'>

                <div className='row d-flex align-items-center justify-content-center text-center'>
                    <span className='subtitle'>BEST TV SERIES</span>
                    <h2>World Best TV Series
                    </h2>
                </div>
                <div className='row d-flex flex-row'>

                    <Card image={one} title="Women's Day" />

                    <Card image={two} title="Women's Day" />
                    <Card image={three} title="Women's Day" />
                    <Card image={four} title="Women's Day" />


                </div>
            </div></div>

    )
}

export default Section5
