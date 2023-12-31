import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer' id='contactus'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-7'>
       <div className='quicklist'>
        <ul className='text-uppercase d-flex'>
            <li><a>faq</a></li>
            <li><a>help center</a></li>
            <li><a>terms of use</a></li>
            <li><a>privacy</a></li>
        </ul>
       </div>
            </div>
            <div className='col-md-5'>
                <div className='footer-social '>
                    <ul className='d-flex'>
                        <li><a><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a><i class="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a><i class="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
