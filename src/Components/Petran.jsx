import React from 'react'
import './Petran.css'

function Petran() {
  return (
    <div className='petran bg-blue-700'>
        <div className="petran-text">
            <img className='pt' src="https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp" alt="" />
            <h5>
            <span>PE</span>rformance - <span>TR</span>acking - <span>AN</span>alytics
            </h5>
            <h1 className='mt-5'>
            AI & IoT Enabled
            </h1>
            <h1>
            Asset Performance Management

            </h1>
            <p className='mt-3'>
            Petran offers an Asset Performance Management (APM) system that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable proactive maintenance strategies.
            </p>
            <div className='mt-10'>
                    
                    <button className='ps bg-blue-700'>
                        Schedule Call
                    </button>
                    <button className='pl bg-blue-700'>
                    <i class="fa-solid fa-play"></i>
                    </button>
                    <span className='plText'>Watch video</span>
            </div>
        </div>
        <div className="petran-img">
            <img src="https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp" alt="" />
        </div>

    </div>
  )
}

export default Petran