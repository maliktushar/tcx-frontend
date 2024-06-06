import React from 'react';
import e1 from '../images/Clip path group.png';
import logo from '../images/Group 1.svg';
import e3 from '../images/Group 45.png';
import e2 from '../images/Group 46.png';
import e4 from '../images/Group 47.png';

const Footer = () => {
  return (
    <>
    <div className='px-10 py-8 flex flex-col gap-7 bg-[#303030] text-white'>
      <div className='flex md:flex-row flex-col justify-between w-full gap-5 items-center'>
        <div className='flex flex-col gap-3 '>
          
          <p className='text-xl font-semibold'>Become an AI Prodigy</p>
          <p>TCx- Grow 100x , 2024.</p>
        </div>
        <a href="/"><img  src={logo} alt="" className='w-24' /></a>
        <div className='flex flex-col gap-5 text-right'>
          <div className='flex flex-row gap-6 justify-center items-center text-lg'>
            <a href="/courses"><p>Learn</p></a>
            <a href="/"><p>Certify</p></a>
            <a href="/"><p>Blogs</p></a>
            <a href="/"><p>About</p></a>
          </div>
          <div className='flex flex-row gap-4 justify-center items-center'>
           <a href= "https://www.instagram.com/tcx.100/"><img src={e4} alt="instagram"/></a> 
            <a href="tcx.techcurators@gmail.com"><img src={e3} alt="gmail" /></a>
            <a href="https://www.linkedin.com/company/tcx-grow-100x/"><img src={e2} alt="linkedin" /></a>
            <a href="https://x.com/TCx_100"><img src={e1} alt="twitter" /></a>
          </div>
        </div>
      </div>
    </div>
      <div className='bg-[#FF7C1D] text-black px-10 py-4 flex md:flex-row flex-col md:justify-between justify-center items-center'>
        <p>© 2024 TCx-Grow 100x . All rights reserved.</p>
        <div className='flex flex-row gap-5 text-right'>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
      </div>
      </>
  )
}

export default Footer
