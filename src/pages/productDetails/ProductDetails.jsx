import React, {useState} from 'react'
import './productdetails.css'
import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";

const ProductDetails = () => {
    const [count, setCount] = useState (0)
   const handlepositivevalue = () =>{
        setCount((count) => count + 1)
        
    }
   const handlenegativevalue = () =>{
      return setCount((prev) =>prev - 1) 
    }
  return (
    <>
    <div className='bg_product'>
        <div className='img_div'>
            <img src="src/assets/websiteimage/bg_1.jpg" alt="" />
            <div className="product_title">
                <ul>
                    <li>HOME</li>
                    <li>PRODUCT</li>
                    <li>PRODUCT</li>
                    <li>SINGLE</li>
                </ul>

                <h2>PRODUCT SINGLE</h2>

            </div>

        </div>
        <div className='holder_wrapper'> 
         <div className="holder_img">
            <img src="src/assets/websiteimage/product-1.jpg" alt="" />
         </div>
         <div className="holder_description">
            <article className='one'>
                <h4 className='bi'>Bell Pepper</h4>
                <ul>
                    <li>5.0 </li>
                    <li>100 Rating</li>
                    <li>500 Sold</li>
                   
                </ul>
                <h3>$120.00</h3>
            </article>
            <article className='two'>
                <c>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.

               </c>
            </article>
            <article className='three'>
                <select name="SMALL" id="small">
                    <option value="SMALL">SMALL</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="LARGE">LARGE</option>
                    <option value="EXTRA LARGE">EXTRA LARGE</option>
                </select>
                <div className='counter'>
                <bu onClick={()=>handlenegativevalue(count)} className='negativ_btn'>-</bu>
                <div className='count_fig'>{count}</div>
                <bu onClick={()=>handlepositivevalue(count)} className='negativ_btn'>+</bu>
                </div>

                <article className='texting'>
<span>600 kg available</span>
        </article>
        <article className='btn_cart'>
            <button className='cart_button'>Add to Cart</button>
        </article>
      
            </article>

            
         </div>
       
         
        </div>
       
        
    </div>
     <div className='div'>
     <div className="product_header">
        <n>Products</n>
        <h2>Relatable Products</h2>
        <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia </span>
    </div>
              <div className='prod'>
                        <div className='hover'><p><FaBars /></p>
                        <p><FaShoppingCart /></p>
                        <p><MdOutlineFavorite /></p></div>
                    <div className='zoom'> 
                        <img src="src/assets/websiteimage/product-1.jpg"alt="" /> 
                    </div>
                        <div className='text'> <h4>BELL PEPPER</h4> <k><j>$120.00</j>$80.00</k></div>
                </div>
              <div className='prod'> 
                <div className='hover'><p><FaBars /></p>
                <p><FaShoppingCart /></p>
                <p><MdOutlineFavorite /></p></div>
              <div className='zoom'>
                <img src="src/assets/websiteimage/product-2.jpg" alt="" /> 
              </div>
              <div className='text'> <h4>STAWBERRY</h4> <r>$120.00</r></div></div>
             <div className='prod'> 
                <div className='hover'><p><FaBars /></p>
                <p><FaShoppingCart /></p>
                <p><MdOutlineFavorite /></p></div>
              <div className='zoom'>
                <img src="src/assets/websiteimage/product-3.jpg" alt="" /> 
              </div> 
              <div className='text'> <h4>GREEN BEANS</h4> <r>$120.00</r></div></div>
             <div className='prod'> 
                <div className='hover'><p><FaBars /></p>
                <p><FaShoppingCart /></p>
                <p><MdOutlineFavorite /></p></div>            
              <div className='zoom'>
                <img src= "src/assets/websiteimage/product-4.jpg" alt="" /> 
              </div> 
              <div className='text'> <h4>PURPLE CABBAGE</h4> <r>$120.00</r></div></div> ``
     </div>
     </>
  )
}

export default ProductDetails