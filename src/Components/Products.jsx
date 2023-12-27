import React from 'react'
import './Products.css'

function Products() {
  return (
    <div className='products mt-20'>
        <div className='pro1'>
        <h6 className='font-bold mt-20'> <i class="fa-solid fa-square sq"></i>PRODUCTS</h6>

<h1>Our HR Tools</h1>
<p>
Our job grading and evaluation tool, combined with the compensation management tool, is a highly effective SaaS-based solution. It greatly assists HR consultants and managers in carrying out their roles with efficiency and precision.

</p>

        </div>
<div className='pro2 bg-[#eff1f5]'>
<h2>Job Grading and Evaluation</h2>
<p>
Job evaluation assesses and ranks job roles in an organization based on responsibilities and skills, often for compensation and structuring purposes.
</p>
<div>
    <img src="https://www.ombrulla.com/_astro/job-profiler.bfa7dd2f_Z10oyMd.webp" alt="" />

</div>
<label> Read More <i class="fa-solid fa-arrow-right is"></i></label>


</div>
<div className='pro2 bg-[#eff1f5]'>
<h2>Compensation Management
</h2>
<p>
Compensation management software automates salary planning, budget management, and equity analysis, ensuring fair and competitive pay practices.


</p>
<div>
    <img src="https://www.ombrulla.com/_astro/Comp360.5e1e772f_23KQc0.webp" alt="" />

</div>
<label> Book For Demo <i class="fa-solid fa-arrow-right is"></i></label>


</div>

    </div>
  )
}

export default Products