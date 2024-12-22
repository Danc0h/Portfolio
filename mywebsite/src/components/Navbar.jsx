import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'



function Navbar() {
 const [click, setClick] = useState(false);
 const [button,setButton] = useState(true);

 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);

 const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
   showButton()
  },[])

  window.addEventListener('resize',showButton);

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
        <Link to = '/' className= "navbar-logo">
            DANCODEV
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click? 'nav-menu active' : 'nav-menu'} >
         <li className='nav-item'>
            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
         </li>
         <li className='nav-item'>
            <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                About
            </Link>
         </li>
         <li className='nav-item'>
            <Link to="/skills" className='nav-links' onClick={closeMobileMenu}>
              Skills
            </Link>
         </li>
         <li className='nav-item'>
            <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
         </li>
         <li className='nav-item'>
            <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
         </li>
        </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar