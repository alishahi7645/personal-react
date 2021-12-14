import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaTypo3, FaTimes, FaBackward, FaBars, Fa500Px, FaAccessibleIcon, FaAllergies, findAllByTestId, FaAd, FaCode } from 'react-icons/fa';

function Navbar() {
    const [menustate, setmenustate] = useState(false);
    const [buttonstate, setbuttonstate] = useState(true);



    const handlebutton = () => {
        if (window.innerWidth <= 960) {
            setbuttonstate(false)
        } else {
            setbuttonstate(true)
        }
    }
    window.addEventListener('resize', handlebutton);
    const menufunc = () => {
        setmenustate(!menustate)
    }
    const closemobilehandler = () => {
        setmenustate(false)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="menu-icon" onClick={menufunc}>
                    {menustate ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={menustate ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closemobilehandler}>
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboute" className="nav-links" onClick={closemobilehandler}>
                            درباره من
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closemobilehandler}>
                            تماس بامن
                        </Link>
                    </li>

                </ul>
                <Link className="navbar-logo" to="/">
                    <p>Shahi</p>Ali <FaCode />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
