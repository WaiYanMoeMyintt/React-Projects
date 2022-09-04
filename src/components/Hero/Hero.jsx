import React from 'react'
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-container text-center justify-center py-5">
         
         <p className='p3-5 text-xl'>PRESENT YOUR SERVICE</p>
         
          <h1 className='leading-tight text-6xl tracking-tight font-bold'>Make landing page <br/> fast and easily.</h1>
          
          <h3 className='py-5 text-xl'>
           Create custom landing pages with Shades that convert more visitors <br/>
           than any website—no coding required.
          </h3>
         
         <div className='p-5'> 
           <input type = "email" name ="email" placeholder='Enter your email'/>  
           <button className='get-started'>Get Started</button>
         </div>
         

          <p className='p3-5 text-base'>Trused by over 50,000+ customers</p>
    </div>
  )
}
export default  Hero;
