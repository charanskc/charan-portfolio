import React from 'react'
import "./MainBody.css";
import MyImage from "../assets/WhatsApp Image 2023-10-17 at 13.41.03.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function MainBody() {
  return (
    <div className="mainbody__container">    
        <img src={MyImage} alt="user_img" className='mainbody__image' />       
        <div className="mainprofile__content">
            <h5>Hello, I'm</h5>
            <h3>Sai Charan V</h3>
            <h2>Full Stack Developer</h2>
            <div className="main_profile__buttons">
                <button className="mainprofile__download__resume">Download CV</button>
                <button className="mainprofile__contact__info">Contact Info</button>
            </div>
            <div className="main_profile_icon_links">
              <FontAwesomeIcon icon={faGithub} className='github_icon'/>
              <FontAwesomeIcon icon={faLinkedin} className='linkedin_icon' />
            </div>
        </div>
    </div>
  )
}

export default MainBody