import {slides} from '../../components/carouselData.json'
import './carousel.css'

const Carousel = () => {
   
    
  return (
    <>
    <div className='container'>
        {slides.map ((item, index)=>{
        
            return <div className='testimony_card'>
                <div className='imgs'><img src={item.img} alt="" key={index}/></div>
                <div className='text'>{item.testimony}</div>
                <div className='name'>{item.name}</div>
                <div className='position'>{item.position}</div>

            </div>
        })}
        <span className='indicators'>
            {slides.map((_, index)=>{
                return <button key={index} onClick={""} className='indicator'></button>
            })}
        </span>
      
    </div>
    <hr />
    </>
  )
}

export default Carousel