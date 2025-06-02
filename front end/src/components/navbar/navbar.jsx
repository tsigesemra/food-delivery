import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const {getTotalCartAmount} = useContext(StoreContext)

    return (
        <div className="navbar">
            <Link to='/'>
                <img src={assets.logo} alt='logo' className='logo' />
            </Link>

            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <Link to='/' onClick={() => { setMenu("home"); setIsMenuOpen(false) }} className={menu === "home" ? "active" : ""}>
                        Home
                    </Link>
                </li>
                <li>
                    <a href='#explore-menu' onClick={() => { setMenu("menu"); setIsMenuOpen(false) }} className={menu === "menu" ? "active" : ""}>
                        Menu
                    </a>
                </li>
                <li>
                    <a href='#app-dowenload' onClick={() => { setMenu("mobile-app"); setIsMenuOpen(false) }} className={menu === "mobile-app" ? "active" : ""}>
                        Mobile App
                    </a>
                </li>
                <li>
                    <a href='#footer' onClick={() => { setMenu("contact-us"); setIsMenuOpen(false) }} className={menu === "contact-us" ? "active" : ""}>
                        Contact Us
                    </a>
                </li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt='search' className='search-icon' />
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt='basket' className='basket-icon' />
                    </Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={() => { setShowLogin(true) }}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar