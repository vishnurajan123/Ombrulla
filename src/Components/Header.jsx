import React, { useState } from 'react'
import './Header.css'

function Header() {
    const [showSideBar,setShowsidebar]=useState(false)
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSideBar=()=>{
        if(showSideBar){
            setShowsidebar(false)
        }
        else{
            setShowsidebar(true)
        }
    }
  return (
    <div className='navv'>
        <div className='head  mt-4'>

           <div className='flex'>
                <img src="https://www.ombrulla.com/logo.svg" alt="" />
               <div className='mt-2 flex ml-auto noRes'>
                    <a className='cursor-pointer text-blue-700 font-bold'>Home</a>
    
                    <ul class="w-full">
            <li class="dropdown inline px-5  cursor-pointer tracking-wide ">
                <a className='text-black-500 hover:text-blue-700 font-bold '>Services <i class="fa-solid fa-chevron-down"></i></a>
                <div class="dropdown-menu absolute hidden h-auto flex pt-3">
                    <ul class="block w-full bg-white shadow  py-4">
                        <li class="py-1 px-12 pb-4 font-bold"><a class="block text-black-500 hover:text-blue-700 cursor-pointer">AI Visual Inspection</a></li>
                        <hr />
                        <li class="py-1 px-12 py-4 font-bold"><a class="block text-black-500 hover:text-blue-700 cursor-pointer">AI Infrastructure Inspection</a></li>
                        <hr />
    
                        <li class="py-1 px-12 py-4 font-bold"><a class="block text-black-500 hover:text-blue-700 cursor-pointer">AI People Tracking</a></li>
                        <hr />
    
                        <li class="py-1 px-12 py-4 font-bold"><a class="block text-black-500 hover:text-blue-700 cursor-pointer">AI Data Analytics</a></li>
                    </ul>
                </div>
            </li>
        </ul>
        <ul>
            <li class="dropdown inline px-5  cursor-pointer  ">
                <a className='text-black-500 hover:text-blue-700 font-bold '>Products </a>
                <div class="dropdown-menu absolute hidden h-auto flex pt-3">
                    <ul class="block w-full bg-white shadow  py-2">
                        <li class="py-1 px-12 pb-4 font-bold"><a class="block text-black-500 hover:text-blue-700 cursor-pointer">Asset Perfomance Management</a></li>
                        </ul>
                </div>
            </li>
        </ul>
        <a className='cursor-pointer text-black-500 hover:text-blue-700 font-bold px-5'>About</a>
        <a className='cursor-pointer text-black-500 hover:text-blue-700 font-bold px-5'>Blog</a>
        <a className='cursor-pointer text-black-500 hover:text-blue-700 font-bold px-5'>Contact</a>
        


               </div>
               <button onClick={handleSideBar} className='menuBar ml-auto mt-2'>
        <i class="fa-solid fa-bars menu"></i>
        </button>
           </div>
           
        </div>
        <div className={!showSideBar?"side":"noSide"}>

            <div className='ombrulla'>
            <img src="https://www.ombrulla.com/logo.svg" alt="" />

            </div>

            <hr />

            <div className='ombrullaLinks'>
                <h3 className='mt-4 font-bold'><a>Home</a></h3>
                <hr className='mt-4' />
                <div>
                <ul class="w-full mt-4">
            <li class="dropdown inline   cursor-pointer tracking-wide ">
                <a className='text-black-500 hover:text-blue-700 font-bold '>Services <i class="fa-solid fa-chevron-down"></i></a>
                <div class="dropdown-menu absolute hidden h-auto flex pt-3">
                    <ul class="block w-full bg-white shadow  py-4">
                        <li class="py-1 px-12 pb-4 font-bold"><a class="block text-black-500 hover:text-blue-700 cursor-pointer">AI Visual Inspection</a></li>
                        <hr />
                        <li class="py-1 px-12 py-4 font-bold"><a class="block text-black-500 hover:text-blue-700 cursor-pointer">AI Infrastructure Inspection</a></li>
                        <hr />
    
                        <li class="py-1 px-12 py-4 font-bold"><a class="block text-black-500 hover:text-blue-700 cursor-pointer">AI People Tracking</a></li>
                        <hr />
    
                        <li class="py-1 px-12 py-4 font-bold"><a class="block text-black-500 hover:text-blue-700 cursor-pointer">AI Data Analytics</a></li>
                    </ul>
                </div>
            </li>
        </ul>
                </div>
                <hr className='mt-4' />
                <div>
                <ul className='mt-4'>
            <li class="dropdown inline   cursor-pointer  ">
                <a className='text-black-500 hover:text-blue-700 font-bold '>Products </a>
                <div class="dropdown-menu absolute hidden h-auto flex pt-3">
                    <ul class="block w-full bg-white shadow  py-2">
                        <li class="py-1  pb-4 font-bold"><a class="block text-black-500 hover:text-blue-700 cursor-pointer">Asset Perfomance Management</a></li>
                        </ul>
                </div>
            </li>
        </ul>
                </div>
                <hr className='mt-4'/>
                <h3 className='font-bold mt-4'><a>About</a></h3>

<hr className='mt-4 font-bold' />
                <h3 className='font-bold mt-4'><a>Blog</a></h3>

<hr className='mt-4 font-bold' />
                <h3 className='font-bold mt-4'><a>Contact</a></h3>

<hr className='mt-4 font-bold' />

            </div>

        </div>
       

    </div>
  )
}

export default Header