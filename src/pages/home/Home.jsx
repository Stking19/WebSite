import React, { useEffect, useState } from 'react'
import './home.css'
import image from '../../../IMG/image1.jpg'
import image2 from '../../../IMG/image2.jpg'
import image3 from '../../../IMG/image3.jpg'
import image4 from '../../../IMG/image4.jpg'
import image5 from '../../../IMG/image5.jpg'
import image6 from '../../../IMG/image6.jpg'
import image7 from '../../../IMG/image7.jpg'
import product1 from '../../../IMG/product1.jpg'
import product2 from '../../../IMG/product2.jpg'
import product3 from '../../../IMG/product3.jpg'
import product4 from '../../../IMG/product4.jpg'
import product5 from '../../../IMG/product5.jpg'
import product6 from '../../../IMG/product6.jpg'
import product7 from '../../../IMG/product7.jpg'
import product8 from '../../../IMG/product8.jpg'
import partner1 from '../../../IMG/partner1.png'
import partner2 from '../../../IMG/partner2.png'
import partner3 from '../../../IMG/partner3.png'
import partner4 from '../../../IMG/partner4.png'
import partner5 from '../../../IMG/partner5.png'
import { TbTruckDelivery } from "react-icons/tb";
import { IoFastFood } from "react-icons/io5";
import { FaAward } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import Carousel from '../../components/carousel/Carousel.jsx'

const Home = () => {

const img = [
  image,
  image2
]

const [num, setNum] = useState(0)

const minusimg = () =>{
    setNum((num) => (num - 1 + img.length) % img.length);
}

useEffect(() =>{
   const interval = setInterval(()=>{
    minusimg();
   }, 4000);

   return () => clearInterval(interval);
}, [img.length]);

  return (
    <>
    <div className="home">
      <img src={img[num % img.length]} alt="" />
    </div>
    <div className='homeIcons'>
      <div className='contain'>
        <div className='icons'><p><TbTruckDelivery /></p></div>
        <h4>Free Shipping</h4>
        <j>ON ORDER OVER $100</j>
      </div>
      <div className='contain'>
        <div className='icons2'><p><IoFastFood  /></p></div>
        <h4>ALWAYS FRESH</h4>
        <j>PRODUCT WELL PACKAGE</j>
      </div>
      <div className='contain'>
        <div className='icons3'><p><FaAward /></p></div>
        <h4>SUPERIOR QUALITY</h4>
        <j>QUALITY PRODUCTS</j>
      </div>
      <div className='contain'>
        <div className='icons4'><p><RiCustomerService2Line /></p></div>
        <h4>SUPPORT</h4>
        <j>24/7 SUPPORT</j>
      </div>
    </div>

    <div className='pic'> 
        <div className='block'>
          <div className='box'><img src={image3} alt="" /><button>Fruits</button></div>
          <div className='box'><img src={image4} alt="" /><button>Vegetables</button></div>
        </div>
        <div className='block'>
          <div className='box2'><img src={image7} alt="" /><div className='details'>
            <h4>Vegetables</h4>
            <p>Protect the health of every home</p>
            <button>Shop now</button>
            </div></div>
        </div>
        <div className='block'>
          <div className='box'><img src={image5} alt="" /><button>Juices</button></div>
          <div className='box'><img src={image6} alt="" /><button>Dried</button></div>
        </div>
    </div>

    <div className='section'>
      <div className='headText'>
          <h4>Featured Products</h4>
          <h1>Our Products</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
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
    </div>
    <div className='section4'>
    <div className='timer_section_side'>
    <p>Best Price For You</p>
    <h2>Deal of the day</h2>
    <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</span>
    <h3>Spinach</h3>
    <h5><em>$10 </em>now $5 only</h5>
    <div className='timer'>
     <span className='T'>
        <li>-1885</li>
        <li>09</li>
        <li>02</li>
        <li>15</li>
     </span>
     <label htmlFor="Time" className='t'>
        <li>DAYS</li>
        <li>HOURS</li>
        <li>MINUTES</li>
        <li>SECONDS</li>
     </label>
    </div>

</div>
    </div>

    <div className='customer'>
    <h4>Testimony</h4>
          <h1>Our satisfied customer says</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and <br />
             Consonantia, there live the blind texts. Separated they live in</p>
    </div>

    <div className='found'>
      <Carousel />
    </div>

    <div className='brands'>
      <div className='bloc'><img src={partner1} alt="" /></div>
      <div className='bloc'><img src={partner2} alt="" /></div>
      <div className='bloc'><img src={partner3} alt="" /></div>
      <div className='bloc'><img src={partner4} alt="" /></div>
      <div className='bloc'><img src={partner5} alt="" /></div>
    </div>

    </>

  )
}

export default Home
