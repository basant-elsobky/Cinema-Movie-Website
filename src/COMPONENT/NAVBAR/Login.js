import React from 'react'
import './login.css'
import { Facebookbutton, Googlebutton, Redbutton } from '../Buttons/Buttons'
const Login = () => {
    return (
        <>

            <div className='container'>
                <div className='contentt d-flex flex-column'>
                    <div className='all'>
                        <div>
                            <h3 className='text-capitalize'>welcome to ecommerce</h3>
                            <h5>login with email & password</h5>
                        </div>
                        <div className='labels d-flex flex-column'>
                            <label for='email text-capitalize' >Email or Phone Number
                            </label>

                            <input type='email' id='email' placeholder='example@mail.com' required />
                            <label for='pass text-capitalize'>password</label>
                            <input type='password' placeholder='*****' required id='pass' />
                        </div>
                        <div className='d-flex flex-column'>
                            <Redbutton name='login' />
                            <h3>on</h3>
                            <Facebookbutton />
                            <Googlebutton />
                        </div>
                        <div className='d-flex flex-row  justify-content-center text-capitalize mt-4'>
                            <p className='text-center text-secondary '>Don’t have account?</p>
                            <a className='register '>signup</a>
                        </div>
                        <div className='d-flex flex-row justify-content-center text-capitalize'>
                            <p className='text-center text-secondary  '>forget your password?</p>
                            <a className='reset'>reset it</a>
                        </div>
                    </div>
                </div></div>


        </>
    )
}

export default Login
