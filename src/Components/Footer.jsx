import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer bg-[#04102a]'> 
<div className='footerGrp'>
    <div className='footerItem'> 
    <h2>About Us</h2>
    <p>
    Ombrulla is an AI-driven company specializing in extracting insights from diverse data sources, including photos, videos, and data lakes. Our tailored solutions help businesses make data-driven decisions and improve their bottom line through automation and AI-powered analysis.
    </p>
    <div className='social'>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-brands fa-youtube"></i>

    </div>

    </div>

    <div className='footerItem'> 
    <h2 className='mb-8'>Our Services</h2>
   <h3>
   AI Infrastructure Inspection
   </h3>
   <h3>
   AI Visual Inspection
   </h3>
   <h3>
   AI Data Analytics
   </h3>

   <h3>
   AI People Tracking
   </h3>

    </div>

    <div className='footerItem'> 
    <h2 className='mb-8'>Our Solutions
</h2>
   <h3>
   Asset Performance Management
   </h3>
   <h3>
   Job Grading & Evaluation

   </h3>
   <h3>
   Compensation Management
   </h3>

    </div>

    <div className='footerItem'> 
    <h2>Reach Us</h2>
   <div className='mt-8'>
    <h6>
    United Kingdom, 53 Denton close


    </h6>
    <h6>
    Redhill, Surrey, RH1 5LB


    </h6>

<h6>
+44 787 999 3892


    </h6>   </div>
    <div className='mt-8'>
    <h6>
    Germany, Schützenstraße 51A



    </h6>
    <h6>
    Lübeck, 23558



    </h6>

<h6>
+49 179 512 5812



    </h6>   </div>

    <div className='mt-8'>
    <h6>
    India, No. 154/20, Royal Space



    </h6>
    <h6>
    Third Floor TI, HSR Layout,



    </h6>
    <h6>
    Bangalore, Karnataka


    </h6>
    <h6>
    560102


    </h6>

<h6>
+91 85900 56435



    </h6>   </div>

    </div>


</div>



    </div>
  )
}

export default Footer