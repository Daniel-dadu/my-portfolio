import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {BsFillAwardFill, BsFolderCheck} from 'react-icons/bs'
import {ImUsers} from 'react-icons/im'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsFillAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            
            <article className='about__card'>
              <ImUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            
            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem perferendis, quibusdam dolores aut obcaecati, accusantium vel deleniti natus praesentium aliquam vero magnam totam. Quos, dignissimos. Quas aliquid iste porro. Eos.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About