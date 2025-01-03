import React from 'react'
import Avatar from '../components/avatar'
import SkillsMenu from '../components/SkillsMenu'
import skillsAvatar from '../assets/H6HPNeKD.png'

const SkillPage = () => {
  return (
    <>
      <Avatar 
        page="skills" 
        image={skillsAvatar}
      />
      <SkillsMenu />
    </>
  )
}

export default SkillPage
