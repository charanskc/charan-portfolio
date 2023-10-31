import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div className="header__container">
        <h4 className="header__title">Sai Charan</h4>
        <div className="sub_header__container">
            <ul className='sub_header__list'>
                <li>About</li>
                <li>Experience</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header;