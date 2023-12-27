import React, { useState } from 'react'
import './Costomers.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
function Costomers() {
    const [autoplayDirection, setAutoplayDirection] = useState(true);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
        reverse: true, 
      };
  return (
    <div className='costomers'>
                <h6 className=' mt-20 text-center'> <i class="fa-solid fa-square sq"></i>OUR CUSTOMERS <i class="fa-solid fa-square sq ml-2"></i></h6>
                <h1>They Trust Us</h1>


<div className='sl'>
    
                    <Slider {...settings}>
          <div className='alll'>
          <div className='cor-1'>
              <img src="https://www.ombrulla.com/best-western.webp"  />
                <img src="https://www.ombrulla.com/dubai-festival-city.webp" alt="" />
                <img src="https://www.ombrulla.com/wild-leaf.webp" alt="" />
                <img src="https://www.ombrulla.com/emirates.webp" alt="" />
                <img src="https://www.ombrulla.com/burger-king.webp" alt="" />
          </div>      </div>
          <div>
         <div className='cor-2'>
              <img src="https://www.ombrulla.com/damac.webp" alt="" />
                <img src="https://www.ombrulla.com/planet-fitness.webp" alt="" />
                <img src="https://www.ombrulla.com/suja.webp" alt="" />
                <img src="https://www.ombrulla.com/azelit.webp" alt="" />  
         </div>    </div>
          
          {/* Add more slides as needed */}
        </Slider>
</div>


   


       


    </div>
  )
}

export default Costomers