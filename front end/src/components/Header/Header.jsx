import React from 'react'
import './Header.css'

const Header = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header'>
        <div className="header-contents">
            <h2>
                order your favorite food here
            </h2>
            <p>Whether you're relaxing in your room, lounging by the pool, or soaking up the sun at the beach—just tap, order, and relax.</p>
            <button onClick={scrollToMenu}>view menu</button>
        </div>

    </div>
  )
}

export default Header