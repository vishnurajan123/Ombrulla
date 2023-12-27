import React from 'react'
import Header from '../Components/Header'
import './Home.css'
import FirstPage from '../Components/FirstPage'
import SecondPage from '../Components/SecondPage'
import ThirdPage from '../Components/ThirdPage'
import FourthPage from '../Components/FourthPage'
import FifthPage from '../Components/FifthPage'
import Petran from '../Components/Petran'
import Products from '../Components/Products'
import Costomers from '../Components/Costomers'
import Testimonials from '../Components/Testimonials'
import Brands from '../Components/Brands'
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'

function Home() {
  return (
  <>
        
        <div className='home'>
            <Header></Header>
            <FirstPage></FirstPage>
    
        </div>
        <div className='home2'>
            <SecondPage></SecondPage>

        </div>
        <div>
            <ThirdPage></ThirdPage>
        </div>
        <div>
            <FourthPage></FourthPage>
        </div>
        <div>
            <FifthPage></FifthPage>
        </div>
        <div>
            <Petran></Petran>
        </div>
        <div>
            <Products></Products>
        </div>
        <div>
            <Costomers></Costomers>
        </div>
        <div>
            <Testimonials></Testimonials>
        </div>
        <div>
            <Brands></Brands>
        </div>
        <div>
            <Blog></Blog>
        </div>
        <div>
            <Footer></Footer>
        </div>
  </>
  )
}

export default Home