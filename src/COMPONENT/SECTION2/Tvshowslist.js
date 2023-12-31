import React from 'react'
import './tvshowlist.css'
import Filmcard from './Card'
import cardsdata from '../Data/Data'
const Tvshowslist = () => {
    const tvshowlist = cardsdata.map(data => {
        return <Filmcard  image={data.image} title={data.title} />
    })
    return (
        
            <div className='container '>
                <div class="row d-flex ">
                    {tvshowlist}
                </div>
            </div>
        
    )
}

export default Tvshowslist
