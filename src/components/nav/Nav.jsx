import React from 'react'
import './nav.css'
import {AiFillHome, AiTwotoneMessage} from 'react-icons/ai'
import {FaUserCircle, FaHandsHelping} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiFillHome/></a>
      <a href="#about"><FaUserCircle/></a>
      <a href="#experience"><MdWork/></a>
      <a href="#services"><FaHandsHelping/></a>
      <a href="#contact"><AiTwotoneMessage/></a>
    </nav>
  )
}

export default Nav