import React from 'react'
import './shoppingCart.css'
import product3 from '../../../IMG/product3.jpg'
import product4 from '../../../IMG/product4.jpg'
import { useNavigate } from 'react-router'

const ShoppingCart = () => {

  const navigate = useNavigate();
  return (
    <>
    <div className='send'>
    </div>

    <div className='headBar'>
    <p>Product name</p>	<p>Price</p>	<p>Quantity</p>	<p>Total</p>
    </div>

    <div className='prodetails'>
        <div className='pro'><button>x</button>
          <div className='proImg'><img src={product3} alt="" /></div>
          <div className='prodet'>
          <h4>Bell Pepper</h4> 
          <p>Far far away, behind the word mountains,<br /> far from the countries</p>
          </div>
          <p>$4.90</p>
          <input type="number" min={0}/>
          <j>$4.90</j>
        </div>
        <div className='pro'><button>x</button>
        <div className='proImg'><img src={product4} alt="" /></div>
          <div className='prodet'>
          <h4>Purple Cabbage</h4> 
          <p>Far far away, behind the word mountains,<br /> far from the countries</p>
          </div>
          <p>$15.70</p>
          <input type="number" min={0}/>
          <j>$15.70</j>
        </div>
    </div>

    <div className='total'>
      <div className='wrapper'>
          <div className='first'><h4>Coupon Code</h4>
              <p>Enter your coupon code if you have one</p>
              <p style={{color: "black", marginTop: "10px", fontSize: "14px"}}>coupon code</p>
              <input type="text" />
          </div>
          <button onClick={() => navigate("/checkout")}>Apply Coupon</button>
      </div>
      <div className='wrapper2'>
          <div className='second'><h4>Estimate shipping and tax</h4>
              <p>Enter your destination to get a shipping estimate</p>
              <label htmlFor="country" >country</label>
              <input type="text" />
              <label htmlFor="country" >state/province</label>
              <input type="text" />
              <label htmlFor="country" >zip/postal code</label>
              <input type="text" />
          </div>
          <buttons onClick={() => navigate("/checkout")}>Estimate</buttons>
      </div>
      <div className='wrapper3'>
          <div className='third'>
            <h4>Cart Totals</h4>
                  <p>Subtotal
                  <j>$20.60</j></p>

                  <p>Delivery
                  <j>$0.00</j></p>

                  <p>Discount
                  <j>$3.00</j></p>
                <div className='closal'>
                  <p>TOTAL
                  <j>$17.60</j></p>
                </div>
              </div>
              {/* j kvjsd vsd vksdvsdvdjmkvasdvjkad vjdmasd */}
              <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
          </div>
       </div>
    </>
  )
}

export default ShoppingCart