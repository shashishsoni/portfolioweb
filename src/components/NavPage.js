import React from 'react'
import '../Styles/NavPage.css'
import astronaut from '../assets/astronaut.png'
import skill from '../assets/skill.png'
import message from '../assets/letter.png'
import stack from '../assets/layer.png'
import { Link, useLocation } from 'react-router-dom'

const NavPage = () => {
  const location = useLocation()

  const getPositionclass = () => {
    switch(location.pathname) {
      case '/':
        return 'about-page';
      case '/skill':
        return 'skill-page';
      case '/stack':
        return 'stack-page';
      case '/message':
        return 'message-page';
      default:
        return '';
    }
  }

  const getTitle = () => {
    switch(location.pathname) {
      case '/':
        return 'About';
      case '/skill':
        return 'Skill';
      case '/stack':
        return 'Stack';
      case '/message':
        return 'Contact';
      default:
        return '';
    }
  }

  const getnavpostionclass = () => {
  return (
    <div className='nav-page'>
      <img src={astronaut} className='w-10 h-10' alt="astronaut" />
      <img src={skill} className='w-10 h-10' alt="skill" />
      <img src={stack} className='w-10 h-10' alt="stack" />
      <img src={message} className='w-10 h-10' alt="message" />
    </div>
  )
}

export default NavPage