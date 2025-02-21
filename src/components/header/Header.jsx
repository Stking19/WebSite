import React, { useEffect, useState } from 'react'
import './header.css'
import { useNavigate } from 'react-router'
import { IoIosCart } from "react-icons/io";

const Header = () => {

  const [drop, setDrop] = useState(false)
  const navigate = useNavigate()

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() =>{
    const handleScroll = () =>{
      const scrollThreshold = 300;
      setIsSticky(window.scrollY> scrollThreshold)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <>
        <div className='head'>
            <k>+ 1235 2355 98</k>
            <p>YOUREMAIL@EMAIL.COM</p>
            <p>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</p>
        </div>
        <div className={`head2 ${isSticky ? "sticky" : ""}`} >
             <h2 className='logo'>VEGEFOODS</h2>
             <div className='pages'>
                <p onClick={() => navigate("/")}>HOME</p>
                <p style={{cursor: "pointer", height: "100%", display: "flex", alignItems: "center"}} onMouseOver={() => setDrop(true)}
                onMouseLeave={() => setDrop(!drop)}
                >SHOP</p>
                <p>ABOUT</p>
                <p>BLOG</p>
                <p>CONTACT</p>
                <l onClick={() => navigate("/cart")}><IoIosCart />[ 0 ]</l>

                {
                  drop ? <div className='drop' 
                  onMouseOver={() => setDrop(true)}
                  onMouseLeave={() => setDrop(!drop)}>
                  <p onClick={() => navigate("/shop")}>Shop</p>
                  <p>Wishlist</p>
                  <p onClick={() => navigate("/pdetails")}>Single Product</p>
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