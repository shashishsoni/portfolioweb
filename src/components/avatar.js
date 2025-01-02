import React from 'react'
import PropTypes from 'prop-types'
import AvatarImage from '../assets/avatar.png'
import "../Styles/avatar.css"

const avatar = ({page}) => {
  const AvatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;
  return (
    <div className={AvatarClass}>
      <span className={spanClass}></span>
      <img src={AvatarImage} alt="Avatar" />
    </div>
  )
}

avatar.propTypes = {
  page: PropTypes.string.isRequired
}

export default avatar
