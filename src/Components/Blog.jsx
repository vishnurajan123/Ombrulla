import React from 'react'
import './Blog.css'
function Blog() {

  return (
    <div className='blog'>


<h6 className=' mt-20 text-center'> <i class="fa-solid fa-square sq"></i>BLOG UPDATES
 <i class="fa-solid fa-square sq ml-2"></i></h6>
 <h1>To Read

</h1>
<hr className='mt-10' />


<div className='blogGrp mt-20'>
    <div className="blogCard">
        <img src="https://blog.ombrulla.com/wp-content/uploads/2023/12/AI-in-Logisics-and-Supply-chain.webp" alt="" />
        <div>
            <h3>AI Revolutionizes Logistics and Supply Chain Management</h3>
            <p>
            AI takes huge leaps in areas like Logistics and Supply chain management with AI Visual Inspection, AI Data Analytics, Predictive Maintenance etc.
            </p>
        </div>
        <div className='blogUser flex py-3 mt-8'>
            <img className='py-2' src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g" alt="" />
            <div className='ml-3 mt-1'>
                <h5>Zara Elizabeth</h5>
                <h4>November 21, 2023
·
3 min read</h4>
            </div>
        </div>
    </div>

    <div className="blogCard">
        <img src="https://blog.ombrulla.com/wp-content/uploads/2023/12/Google-io-2023.webp" alt="" />
        <div>
            <h3>Google I/O 2023: A Deeper Look at the Future of AI</h3>
            <p>
            Google I/O 2023 envisions a future where helpful AI integrates seamlessly into our lives, breaking down barriers, empowering individuals, and tackling global challenges. By developing AI responsibly, we can shape a future where everyone benefits.


            </p>
        </div>
        <div className='blogUser flex py-1 '>
            <img className='py-2' src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g" alt="" />
            <div className='ml-3 mt-1'>
                <h5>Zara Elizabeth</h5>
                <h4>December 8, 2023
·
5 min read</h4>
            </div>
        </div>
    </div>

    <div className="blogCard">
        <img src="https://blog.ombrulla.com/wp-content/uploads/2023/11/Blog-Images.png" alt="" />
        <div>
            <h3>A Deep Understanding of AI Visual Inspection</h3>
            <p>
            The primary objective of this blog is to offer a foundational comprehension of automated visual evaluation and elucidate how AI Visual Inspection techniques contributes to significant time and effort savings.


            </p>
        </div>
        <div className='blogUser flex py-1 '>
            <img className='py-2' src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g" alt="" />
            <div className='ml-3 mt-1'>
                <h5>Zara Elizabeth</h5>
                <h4>November 28, 2023
·
5 min read</h4>
            </div>
        </div>
    </div>
</div>

<div className="blogCard ml-10 mt-16">
        <img src="https://blog.ombrulla.com/wp-content/uploads/2023/11/AI-on-Process-Optimization-and-Quality-Control.webp" alt="" />
        <div>
            <h3>Use of AI in Process Optimization and Quality Control</h3>
            <p>
            AI Visual Inspection is increasingly being used in process optimization and quality control across a range of industries, including manufacturing, healthcare, and logistics.

            </p>
        </div>
        <div className='blogUser flex py-1 '>
            <img className='py-2' src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g" alt="" />
            <div className='ml-3 mt-1'>
                <h5>Zara Elizabeth</h5>
                <h4>November 21, 2023
·
3 min read</h4>
            </div>
        </div>
    </div>



    </div>
  )
}

export default Blog