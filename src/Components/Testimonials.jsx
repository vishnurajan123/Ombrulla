import React from 'react'
import './Testimonials.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000
      };
  return (
    <div className='bg-blue-950 test'>
                <h6 className='font-bold mt-8 text-white'> <i class="fa-solid fa-square sq"></i>OUR TESTIMONIALS</h6>
                <h1>What Customers Say About Us</h1>
<div>

<Slider {...settings}>
      <div>
        <div className='cor-item'>
        <div className='cor-text'>
            <i class="fa-solid fa-quote-left quot"></i>
            <p>
            Ombrulla's AI people tracking solution has impressively enhanced our ability to seamlessly monitor and manage foot traffic. The system's accuracy and real-time insights not only streamline operations but also elevate overall security measures.
            </p>
        </div>
        <div className='cor-bot bg-slate-300'>
            <img src="https://www.ombrulla.com/_astro/shipcom.ee1ba5d2_o18LH.webp" alt="" />
            <div className='mt-4 ml-4'>
                <h4>Quresh Goga</h4>
                <h5>Shipcom wireless</h5>
            </div>
        </div>
        </div>
      </div>
      <div>
      <div className='cor-item'>
        <div className='cor-text'>
            <i class="fa-solid fa-quote-left quot"></i>
            <p>
            Ombrulla and Green Palm join forces on an AI visual inspection project for ship assessments, utilizing computer vision to detect damages and anomalies. The project's outcomes and the resulting benefits have exceeded our expectations, leaving us highly satisfied with the collaboration.
            </p>
        </div>
        <div className='cor-bot bg-slate-300'>
            <img src="https://www.ombrulla.com/_astro/green-palmes.41a0af47_Z1Mo497.webp" alt="" />
            <div className='mt-4 ml-4'>
                <h4>Manoj Menon</h4>
                <h5>Green Palm</h5>
            </div>
        </div>
        </div>   
           </div>
      <div>
      <div className='cor-item'>
        <div className='cor-text'>
            <i class="fa-solid fa-quote-left quot"></i>
            <p>
            Ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives.
            </p>
        </div>
        <div className='cor-bot bg-slate-300'>
            <img src="https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp" alt="" />
            <div className='mt-4 ml-4'>
                <h4>Joseph</h4>
                <h5>Planet Fitness</h5>
            </div>
        </div>
        </div>   

         </div>

<div>
<div className='cor-item'>
        <div className='cor-text'>
            <i class="fa-solid fa-quote-left quot"></i>
            <p>
            Ombrulla has exceeded our expectations; they are serious and consistent in their job. Ombrulla and their team of programmers have always been available to us. I would suggest this firm to anyone looking for restaurant data analytics solutions.
            </p>
        </div>
        <div className='cor-bot bg-slate-300'>
            <img src="https://www.ombrulla.com/_astro/wild-leaf.85d7f76f_Z1vakWD.webp" alt="" />
            <div className='mt-4 ml-4'>
                <h4>Tony Michael
</h4>
                <h5>CEO, The Cotillion Hotels, New York, USA
</h5>
            </div>
        </div>
        </div>   
</div>


<div>
<div className='cor-item'>
        <div className='cor-text'>
            <i class="fa-solid fa-quote-left quot"></i>
            <p>
            We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us
            </p>
        </div>
        <div className='cor-bot bg-slate-300'>
            <img src="https://www.ombrulla.com/_astro/best-western.d33d3fe0_Z2qgqbJ.webp" alt="" />
            <div className='mt-4 ml-4'>
                <h4>David Thomas</h4>
                <h5>Managing Director Best Western, Kansas, USA.</h5>
            </div>
        </div>
        </div>
</div>

<div>
<div className='cor-item'>
        <div className='cor-text'>
            <i class="fa-solid fa-quote-left quot"></i>
            <p>
            Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective
            </p>
        </div>
        <div className='cor-bot bg-slate-300'>
            <img src="https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp" alt="" />
            <div className='mt-4 ml-4'>
                <h4>James Joseph</h4>
                <h5>Managing Director, Terranz Dubai, UAE</h5>
            </div>
        </div>
        </div>
</div>

<div>
<div className='cor-item'>
        <div className='cor-text'>
            <i class="fa-solid fa-quote-left quot"></i>
            <p>
            We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project.
            </p>
        </div>
        <div className='cor-bot bg-slate-300'>
            <img src="https://www.ombrulla.com/_astro/azelit.c51d4d1e_ZFoIpv.webp" alt="" />
            <div className='mt-4 ml-4'>
                <h4>Vinod MN</h4>
                <h5>Managing Director, AZEL IT Solutions</h5>
            </div>
        </div>
        </div>
</div>

<div>
<div className='cor-item'>
        <div className='cor-text'>
            <i class="fa-solid fa-quote-left quot"></i>
            <p>
            Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective
            </p>
        </div>
        <div className='cor-bot bg-slate-300'>
            <img src="https://www.ombrulla.com/_astro/terranz-other.fe41f67d_Z1IrlCC.webp" alt="" />
            <div className='mt-4 ml-4'>
                <h4>Joseph</h4>
                <h5>Terranz Dubai, UAE</h5>
            </div>
        </div>
        </div>
</div>

    </Slider>
</div>


    </div>
  )
}

export default Testimonials