import React from 'react'
import {BsLinkedin, BsGithub, BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/daniel-esteban-maldonado-espitia-8b108517b/" target="_black"><BsLinkedin/></a>
        <a href="https://github.com/Daniel-dadu" target="_black"><BsGithub/></a>
        <a href="https://www.youtube.com/c/D94DaduPro" target="_black"><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials