import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='bg'>
        <div className='imgzs'>
          <img src="https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className='bg_input'>
            <h2>Login</h2>
            <input type="text"  className='koda' placeholder=' Enter your email'/>
            <input type="text" className='koda' placeholder='  Enter your password'/>
            <div className='btln'>Login</div>
          
        </div>
      
    </div>
  )
}

export default Login