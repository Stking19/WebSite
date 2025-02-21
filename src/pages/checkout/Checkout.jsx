import React from 'react'
import './checkout.css'
import SlideInComponent from '../../components/SlideInComponent'

const Checkout = () => {
  return (
    <>
    <SlideInComponent>
    <div className='Cout'>
    <div className='onTop'>
        <p>HOME CHECKOUT</p>
        <h3>CHECKOUT</h3>
      </div>
    </div>
    </SlideInComponent>

  <SlideInComponent>
    <div className='bodyCard'>
      <div className='billing'>
        <div className='wrapping'>
         <h3 style={{fontSize: "25px", fontWeight: "200", marginLeft: "4%"}}>Billing Details</h3>
          <div className='Class'> 
            <label ><p style={{marginLeft: "8%"}}>First Name</p> <input type="text" /></label> 
            <label ><p style={{marginLeft: "8%"}}>Last Name</p><input type="text" /></label>
         </div>

         <div className='Class'> 
            <label style={{width: "100%"}}>
              <p style={{marginLeft: "4%"}}>State / Country</p>
              <input style={{width: "95%"}} type="text" placeholder='France'/>
            </label> 
         </div>
         
         <div className='Class'> 
            <label ><p style={{marginLeft: "8%"}}>Street Address</p> <input type="text" placeholder='House number and street name'/></label> 
            <label ><p style={{marginLeft: "8%"}}> </p><input type="text" style={{marginTop: "18px"}} placeholder='Appartment,suite,unit etc: (optional) '/></label>
         </div>

         <div className='Class'> 
            <label ><p style={{marginLeft: "8%"}}>Town / city</p> <input type="text" /></label> 
            <label ><p style={{marginLeft: "8%"}}>Postcode / ZIP*</p><input type="text" /></label>
         </div>

         <div className='Class'> 
            <label ><p style={{marginLeft: "8%"}}>Phone</p> <input type="text" /></label> 
            <label ><p style={{marginLeft: "8%"}}>Email Address</p><input type="text" /></label>
         </div>

          <div className='Classes'> 
            <label ><p style={{fontSize: "14px"}}>Create an Account?</p>
             <input type="radio" name='sign' style={{cursor: "pointer"}}/></label> 
            <label className='style'><p style={{fontSize: "14px"}}>Ship to different address</p>
            <input type="radio" name='sign' style={{cursor: "pointer"}} /></label>
         </div>

        </div>
      </div>
      <div className='cartTotal'><div className='wrapping'>
        <div className='wrappers'>
            <div className='thir'>
              <h4>Cart Totals</h4>
                    <p>Subtotal
                    <j>$20.60</j></p>

                    <p>Delivery
                    <j>$0.00</j></p>

                    <p>Discount
                    <j>$3.00</j></p>
                  <div className='closa'>
                    <p>TOTAL
                    <j>$17.60</j></p>
                  </div>
                </div>
            </div>
            <div className='wrappers'>
              <div className='thirs'>
                <h3>Payment Method</h3>
                <div className='alter'><input type="radio" name='king'/><k>Direct Bank Transfer</k></div>
                <div className='alter'><input type="radio" name='king'/><k>Check Payment</k></div>
                <div className='alter'><input type="radio" name='king'/><k>Paypal</k></div>
                <div className='alta'><input type="checkbox"/><k>I have read and accept the terms and conditions</k></div>
                <button>Place an Order</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </SlideInComponent>
    </>
  )
}

export default Checkout