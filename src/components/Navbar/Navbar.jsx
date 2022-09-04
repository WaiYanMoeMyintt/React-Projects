import React,{useState,useEffect} from 'react'
import logo from "../../assets/logo.png";
import { navLinks } from '../../constants/data';
import "./navbar.css";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";
const Navbar = () => {
  const [toggle,setToggle] = useState(true);
  const [btn,setBtn]       = useState("nav_active");
  const click = ()=>{
       setToggle(prev=>!prev);

  };
  useEffect(()=>{
   return btn === "nav_active" ? setBtn("nav_hidden") : setBtn("nav_active");
  },[toggle])

  return (
    <nav className="navbar-container w-full flex justify-between sm:px-5">
          <div className="logo-container">
              <img className='max-w-lg cursor-pointer' src = {logo} alt = "logo"/>
          </div>
          <div className="nav-container">
               <ul className={`flex items-center nav_hidden ${btn}`}>
                  {
                    navLinks.map(nav=>(
                        <li className='px-4' key = {nav.id}>
                           <a className='font-medium gap-4' href={`#${nav.title}`}>{nav.name}</a>
                        </li>
                    ))
                  }
               </ul>
          </div>
          <div className="nav-button px-5 ">
             <button className='nav-btn'>Get Started</button>
          </div>
         
      <div className='md:hidden flex sm-nav'>
           <img width='30px' className='menu cursor-pointer' src = {toggle ? menu : close} onClick={click} />
      </div>
    </nav>
  )
}

export default Navbar;