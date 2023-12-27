import React from 'react'
import './ThirdPage.css'

function ThirdPage() {
  return (
    <div className='third'>
        <div className='third-text'>
        <h6 className='font-bold mt-8'> <i class="fa-solid fa-square sq"></i>AI INFRASTRUCTURE INSPECTION</h6>
        <h1>
        Enhances Efficiency, Safety, and Cost-Effectiveness
        </h1>
        <ul>
            <li>
                <span> Cutting-Edge Solution:</span>
                Ombrulla leverages AI, drones, and IoT technologies to transform infrastructure inspection.       
                     </li>
                <li>
                <span> Real-Time Insights:</span>
                Real-time insights enhance inspection efficiency, safety, and reduce conventional challenges.
           </li>

           <li>
                <span> Longevity and Cost-Effectiveness: </span>
                Ombrulla ensures the longevity and safety of critical infrastructure while offering a cost-effective solution.

           </li>

           <li>
                <span> Responsive Maintenance: </span>
                Enhances infrastructure management, increasing reliability and responsiveness, and reducing risks.
           </li>

        </ul>
        <button>
                        Schedule Call
                    </button>
                    <label> Read More <i class="fa-solid fa-arrow-right is"></i></label>



        </div>
        <div className='third-img'>
            <img src="https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp" alt="" />
        </div>

    </div>
  )
}

export default ThirdPage