import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
  
        <div className="bx col-md-3 col-sm-6 mb-4">
          <img src={props.image}  />
          <div class="content">
            <h3>{props.title}</h3>
            <p>Action, Drama, Fantsy</p>
            <h6><span>IMDB</span> <i class="bi bi-star-fill"></i> 9.0</h6>
          </div>
        </div>
    
  )
}

export default Card
