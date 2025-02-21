import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <div className='bg'>
        <div className='imgzz'>
            <img src="https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg?auto=compress&cs=tinysrgb&w=600" alt=''/>
        </div>
        <div className='bg_input'>
            <h2>SignUp</h2>
            <input type="text"  className='inputz' placeholder=' Enter your username'/>
            <input type="text"  className='inputz' placeholder=' Enter your email'/>
            <input type="text" className='inputz' placeholder='  Enter your password'/>
            <button className='btin'>Signup</button>
          
        </div>
      
    </div>
  )
}

export default Signup