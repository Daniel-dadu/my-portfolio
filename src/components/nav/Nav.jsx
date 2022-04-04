import React from 'react'
import './nav.css'
import {AiFillHome, AiTwotoneMessage} from 'react-icons/ai'
import {FaUserCircle, FaHandsHelping} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  let compareActive = id => activeNav === id ? 'active' : ''
  // let onClickActive = id => setActiveNav(id)

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={compareActive("#")}><AiFillHome/></a>

      <a href="#about" onClick={() => setActiveNav("#about")} className={compareActive("#about")}><FaUserCircle/></a>

      <a href="#experience" onClick={() => setActiveNav("#experience")} className={compareActive("#experience")}><MdWork/></a>

      <a href="#services" onClick={() => setActiveNav("#services")} className={compareActive("#services")}><FaHandsHelping/></a>
      
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={compareActive("#contact")}><AiTwotoneMessage/></a>
    </nav>
  )
}

export default Nav