import React from 'react'
import './FirstPage.css'

function FirstPage() {
  return (
    <div className='first'>
        <div className='firstText'>
            <div>
                <h1>Manual <br />
                Inspection is <br />
                <span className='fh'>
                    Slow & Error- <br />
                    Prone
                </span>
    
                </h1>
                <p className='mt-5'>
                AI visual inspection, powered by computer vision, revolutionises the inspection process in manufacturing, enhancing precision and cost-effectiveness, all the while maintaining product excellence.
                </p>
               <div className='mt-4'>
                    
                    <button className='schedule'>
                        Schedule Call
                    </button>
                    <button className='play'>
                    <i class="fa-solid fa-play"></i>
                    </button>
                    <span className='playText'>Watch video</span>
            </div>
           </div>

        </div>
        <div className='firstImg'>
        
            
            
            <img src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp" alt="" />

        </div>


    </div>
  )
}

export default FirstPage