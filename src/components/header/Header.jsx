import React, { useState } from 'react'
import './header.css'
import { useNavigate } from 'react-router'

const Header = () => {

  const [drop, setDrop] = useState(false)
  const navigate = useNavigate()

  return (
    <>
        <div className='head'>
            <k>+ 1235 2355 98</k>
            <p>YOUREMAIL@EMAIL.COM</p>
            <p>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</p>
        </div>
        <div className='head2'>
             <h2 className='logo'>VEGEFOODS</h2>
             <div className='pages'>
                <p>HOME</p>
                <p style={{cursor: "pointer"}} onMouseOver={() => setDrop(true)}
                  // onMouseLeave={() => setDrop(!drop)}
                >SHOP</p>
                <p>ABOUT</p>
                <p>BLOG</p>
                <p>CONTACT</p>

                {
                  drop ? <div className='drop'>
                  <p onClick={() => navigate("/shop")}>Shop</p>
                  <p>Wishlist</p>
                  <p>Single Product</p>
                  <p onClick={() => navigate("/cart")}>Cart</p>
                  <p onClick={() => navigate("/checkout")}>Checkout</p>
                </div> : null
                }
                
             </div>
        </div>
    </>
  )
}

export default Header