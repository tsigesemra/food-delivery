import React, { useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className="navbar">
        <img src={assets.logo} alt='logo' className='logo'/>
       
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}><a href='#'>Home</a></li>
                <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}><a href='#'>menu</a></li>
                <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}><a href='#'>mobile app</a></li>
                <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}><a href='#'>Contact us</a></li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt='search' className='search-icon'/>
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt='basket' className='basket-icon'/>
                    <div className="dot"></div>
                </div>
                <button>sign in</button>
            </div>
    </div>
  )
}

export default Navbar