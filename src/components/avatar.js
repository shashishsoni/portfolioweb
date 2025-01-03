import React from 'react'
import PropTypes from 'prop-types'
import defaultAvatar from '../assets/GA-B8OY7.png'
import "../Styles/avatar.css"


const avatar = ({page, image}) => {
  const AvatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;
  
  return (
    <div className={AvatarClass}>
      <span className={spanClass}></span>
      <img 
        src={image || defaultAvatar} 
        alt="Avatar" 
        className='avatar-image'
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

avatar.propTypes = {
  page: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default avatar
