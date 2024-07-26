import React,{useState} from 'react'//rafce--> react arrow based function with export
import Home from '../../pages/Home/Home'
import { MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import './Layout.css'
import Menus from '../Menus/Menus';
import MobileNav from '../MobileNav/MobileNav';

const Layout = () => {
 const [toggle,setToggle]=useState(true) 

 const handleToggle=()=>{
  setToggle(!toggle);
  // console.log('Toggle State:', toggle);
 }
  return (
    <>
    <MobileNav/>
    <div className="sidebar-section">
        <div className={toggle?"sidebar sidebar-toggle":"sidebar"}>
            <div className="sidebar-toggle-icons" >
            {/* <MdOutlineKeyboardDoubleArrowRight size={30}/> */}
            <p onClick={handleToggle}>
              {toggle?(<MdOutlineKeyboardDoubleArrowLeft size={30}/>):(<MdOutlineKeyboardDoubleArrowRight size={30}/>)}
            </p>
            </div>
            <Menus toggle={toggle}/>
        </div>

        <div className="container">
        {/* <div className={toggle?"container sidebar-toggle":"container"}> */}
            <Home/>
        </div>
    </div>

      
    </>
  )
}

export default Layout

