import React from 'react'
import './shop.css'
import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import product1 from '../../../IMG/product1.jpg'
import product2 from '../../../IMG/product2.jpg'
import product3 from '../../../IMG/product3.jpg'
import product4 from '../../../IMG/product4.jpg'
import product5 from '../../../IMG/product5.jpg'
import product6 from '../../../IMG/product6.jpg'
import product7 from '../../../IMG/product7.jpg'
import product8 from '../../../IMG/product8.jpg'

const Shop = () => {
  return (
    <>
    <div className='image'> 
    </div>

    <div className='shop'>
        <h4>All</h4>
        <p>Vegetables</p>
        <p>Fruits</p>
        <p>Juice</p>
        <p>Dried</p>
    </div>

    <div className='product'>
             <div className='prod'>
                <div className='hover'><p><FaBars /></p>
                <p><FaShoppingCart /></p>
                <p><MdOutlineFavorite /></p></div>
              <div className='zoom'> 
                <img src={product1} alt="" /> 
              </div>
                <div className='text'> <h4>BELL PEPPER</h4> <k><j>$120.00</j>$80.00</k></div></div>
              <div className='prod'> 
                <div className='hover'><p><FaBars /></p>
                <p><FaShoppingCart /></p>
                <p><MdOutlineFavorite /></p></div>
              <div className='zoom'>
                <img src={product2} alt="" /> 
              </div>
              <div className='text'> <h4>STAWBERRY</h4> <p>$120.00</p></div></div>
             <div className='prod'> 
                <div className='hover'><p><FaBars /></p>
                <p><FaShoppingCart /></p>
                <p><MdOutlineFavorite /></p></div>
              <div className='zoom'>
                <img src={product3} alt="" /> 
              </div> 
              <div className='text'> <h4>GREEN BEANS</h4> <p>$120.00</p></div></div>
             <div className='prod'> 
                <div className='hover'><p><FaBars /></p>
                <p><FaShoppingCart /></p>
                <p><MdOutlineFavorite /></p></div>            
              <div className='zoom'>
                <img src={product4} alt="" /> 
              </div> 
              <div className='text'> <h4>PURPLE CABBAGE</h4> <p>$120.00</p></div></div>
             <div className='prod'> 
                <div className='hover'><p><FaBars /></p>
                <p><FaShoppingCart /></p>
                <p><MdOutlineFavorite /></p></div>
              <div className='zoom'>
                <img src={product5} alt="" /> 
              </div> 
              <div className='text'> <h4>TOMATOE</h4> <k><j>$120.00</j> $80.00</k></div></div>
             <div className='prod'>
                <div className='hover'><p><FaBars /></p>
                <p><FaShoppingCart /></p>
                <p><MdOutlineFavorite /></p></div>
              <div className='zoom'>
                <img src={product6} alt="" /> 
              </div>
              <div className='text'> <h4>BROCOLLI</h4> <p>$120.00</p></div></div>
             <div className='prod'>
                <div className='hover'><p><FaBars /></p>
                <p><FaShoppingCart /></p>
                <p><MdOutlineFavorite /></p></div>
              <div className='zoom'>
                <img src={product7} alt="" /> 
              </div>  
              <div className='text'> <h4>CARROTS</h4> <p>$120.00</p></div></div>
             <div className='prod'> 
              <div className='hover'><p><FaBars /></p>
              <p><FaShoppingCart /></p>
              <p><MdOutlineFavorite /></p></div>
              <div className='zoom'>
              <img src={product8} alt="" /> 
              </div>
              <div className='text'> <h4>FRUIT JUICE</h4> <p>$120.00</p></div></div>
          </div>
        
    </>
  )
}

export default Shop