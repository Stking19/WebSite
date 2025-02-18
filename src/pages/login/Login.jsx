import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='bg'>
        <div className='imgzz'>
            <img src="src/assets/websiteimage/bg_1.jpg" alt="" />
        </div>
        <div className='bg_input'>
            <h2>Login</h2>
            <input type="text"  className='inputz' placeholder=' Enter your email'/>
            <input type="text" className='inputz' placeholder='  Enter your password'/>
            <button className='btin'>Login</button>
          
        </div>
      
    </div>
  )
}

export default Login