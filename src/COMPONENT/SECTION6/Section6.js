import React from 'react'
import './section6.css'
const Section6 = () => {
  return (
    <div className='section6'>
      <div className='container content'>
        <div className='row'>
            <div className='col-lg-6 '>
            <div className='newsletter-content'>
            <h2>TRIAL START FIRST 30 DAYS.</h2>
                <p>Enter your email to create or restart your membership.</p>
            </div>
               
            </div>
            <div className='col-lg-6 email'>
            <div>

                <form>
                    <input className='news-letter-form' type="email" name="email" id="email" required placeholder='enter your email'/>
                <button className='btnn'>get started</button>
                </form>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section6
