import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const navToggle = () => {
        const nav_box = document.querySelector('.nav-box')
        if(nav_box.style.display === "none") {
            nav_box.style.display = "block"
        } else {
            nav_box.style.display = "none"
        }
    }

    const darkMode = () => {
        const dark_mode = document.querySelector('.dark-mode-text')
        const dark_mode_logo_dark = document.querySelector('.dark-mode-logo-dark')
        const dark_mode_logo_light = document.querySelector('.dark-mode-logo-light')
        const dark_mode_text = document.querySelector('.dark-mode-text')
        if(dark_mode.innerHTML === "Dark Mode") {
            document.body.classList.add("dark")
            dark_mode_text.innerHTML = "Light Mode"
            dark_mode_logo_dark.style.display = "none"
            dark_mode_logo_light.style.display = "block"
        }
        else {
           document.body.classList.remove("dark")
            dark_mode_text.innerHTML = "Dark Mode"
            dark_mode_logo_dark.style.display = "block"
            dark_mode_logo_light.style.display = "none"
        }
    }

    return (
        <div className="header">
            <nav className="nav">
                <div className="logo-box">
                    <Link className="nav-link" to="/">food Info</Link>
                    <div className="dark-mode-btn" onClick={() => darkMode()}>
                        <div className="dark-mode-logo-dark"><i className="fas fa-moon"></i></div>
                        <div className="dark-mode-logo-light"><i class="fas fa-sun"></i></div>
                        <div className="dark-mode-text">Dark Mode</div>
                    </div>
                </div>
                <div className="nav-toggle" onClick={() => navToggle()}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="nav-box">
                    <ul className="nav-links">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item nav-item-drp">
                            <p className="nav-link">Dishes</p>
                            <div className="dish-dropdown">
                                <ul className="dish-droplist">
                                    <li className="dish-drop">
                                        <Link className="dish-drop-link" to="/dishes">Search & Filter</Link>
                                    </li>
                                    <li className="dish-drop">
                                        <Link className="dish-drop-link" to="/categories">Categories</Link>
                                    </li>
                                    <li className="dish-drop">
                                        <Link className="dish-drop-link" to="/cuisines">Cuisines</Link>
                                    </li>
                                    <li className="dish-drop">
                                        <Link className="dish-drop-link" to="/ingredients">Ingredients</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
